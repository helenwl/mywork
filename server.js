// ── server.js ─────────────────────────────────────────────────
// Lightweight proxy between the portfolio frontend and the
// Anthropic API. The API key lives here only — never in the browser.
// ──────────────────────────────────────────────────────────────

// Layer 1: Load environment variables first, before any process.env access
require('dotenv').config();

const express    = require('express');
const cors       = require('cors');
const rateLimit  = require('express-rate-limit');
const Anthropic  = require('@anthropic-ai/sdk');

const app  = express();
const PORT = process.env.PORT || 3001;

// ── ANTHROPIC CLIENT ──────────────────────────────────────────
// Instantiated once at startup — never exposed to the frontend
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Model to use — change here to swap easily
const MODEL = 'claude-haiku-4-5-20251001';

// ── PUBLICATIONS ──────────────────────────────────────────────
// Mirror of the PUBLICATIONS array in content.js.
// IMPORTANT: when you update paper summaries in content.js,
// update this array too so the system prompt stays current.
const PUBLICATIONS = [
  {
    year: '2025',
    title: 'Polytypes and planar defects revealed in the purine base xanthine using multi-dimensional electron diffraction',
    journal: 'Communications Chemistry, 8, 331',
    summary: `This paper uses a combination of 3D electron diffraction (3D-ED) and 4D scanning transmission electron microscopy (4D-STEM) to explore the microstructure of xanthine crystals in detail. Building directly on the first xanthine paper, it identifies twinning in Form I xanthine (a 180° rotation relationship between crystal domains about the [101] axis), solves the structure of a new second polymorph of xanthine called Form II (orthorhombic, space group P2₁2₁2₁, unit cell a=10.10 Å, b=12.54 Å, c=17.91 Å), and shows that Form II is a polytype of Form I — meaning both share identical intra-layer hydrogen-bonded arrangements but differ in how those layers stack. Form I stacking follows an ABAB sequence; Form II follows ABCD, with the layer repeating every four layers. 4D-STEM directly visualises twin boundaries, polytype interfaces, and fine-scale planar disorder (stacking faults at near-random intervals) within individual sub-micron particles of xanthine — demonstrating that a single particle can contain multiple coexisting crystal forms. A multiphase Rietveld refinement of high-resolution synchrotron X-ray powder diffraction (XRPD) data, incorporating a stacking fault model, confirmed these findings in bulk powder. The work argues that disorder on the nanoscale is likely common in layered organic molecular crystals more broadly, with implications for pharmaceutical polymorphism characterisation and regulatory requirements.`
  },
  {
    year: '2025',
    title: 'Revealing the crystal structure of the purine base xanthine with three-dimensional (3D) electron diffraction',
    journal: 'Crystal Growth & Design, 25, 1293–1298',
    summary: `This paper reports the first crystal structure determination of xanthine (3,7-dihydropurine-2,6-dione), a purine base found widely in organisms and a metabolic precursor to uric acid. Despite xanthine's fundamental biological importance — it is chemically closely related to guanine, hypoxanthine, theophylline, caffeine, and theobromine — its crystal structure had remained unknown because its crystals are too small (sub-micrometre) for conventional single-crystal X-ray diffraction (SCXRD) and strong preferred orientation complicated powder X-ray diffraction analysis. Using 3D electron diffraction (3D-ED) on a Thermo Fisher Titan Krios G3i transmission electron microscope at 300 kV, the structure was solved from a single ~300 nm crystal. The structure (named Form I) is monoclinic with space group P2₁/c, unit cell a=9.82 Å, b=17.87 Å, c=6.79 Å, β=107.5°, with two crystallographically independent xanthine molecules per asymmetric unit (Z'=2). The data quality was sufficient to locate all hydrogen atom positions without geometric restraints, confirming the presence of the expected 7H-tautomer. The crystal structure consists of two-dimensional hydrogen-bonded layers — with four N–H···O and two N–H···N interactions — stacked approximately parallel to the (101̄) planes with an interlayer spacing of ~3.2 Å (weak van der Waals forces). The hydrogen-bonding network shows strong similarity to hypoxanthine crystals. Synchrotron powder X-ray diffraction data suggested the presence of additional polymorphic forms and planar disorder, investigated in the follow-up paper. This structure determination opens opportunities for understanding biogenic xanthine crystals found in insect eyes and other organisms, where xanthine is used to manipulate light.`
  },
  {
    year: '2024',
    title: 'From formulation to structure: 3D electron diffraction for the structure solution of a new indomethacin polymorph from an amorphous solid dispersion',
    journal: 'IUCrJ, 11, 744–748',
    summary: `This paper demonstrates 3D electron diffraction (3D-ED) applied directly to a pharmaceutical product formulation — an amorphous solid dispersion (ASD) — rather than a purified single-phase sample. Amorphous solid dispersions are a common formulation strategy for poorly soluble drugs: the active pharmaceutical ingredient (API) is dispersed within an amorphous water-soluble polymer to improve dissolution. An ASD of indomethacin (a well-known non-steroidal anti-inflammatory drug, BCS class II) and polyvinylpyrrolidone (PVP) was prepared by solvent evaporation using dichloromethane (DCM). Within the 95:5 indomethacin:PVP ASD, powder X-ray diffraction revealed an unexpected new crystalline form that did not match any of the eight previously known indomethacin polymorphs. Using 3D-ED on a Thermo Fisher Titan Krios G3i at 300 kV, the crystal structure of this new ninth polymorph — called σ (sigma) — was solved from a single crystal (monoclinic C2/c, a=43.70 Å, b=5.19 Å, c=33.43 Å, β=100.73°, Z'=2). The structure contains two conformationally similar but crystallographically independent indomethacin molecules forming a carboxylic acid dimer. Notably, 12% of the unit-cell volume consists of open hydrophobic channels parallel to the b axis, leading to the hypothesis that DCM molecules acted as a solvent template during crystallisation — confirmed by producing the same σ polymorph via simple evaporation of a DCM solution of pure indomethacin at room temperature. The σ polymorph is metastable and has a more open structure that may exhibit different dissolution properties compared with the thermodynamically stable γ phase. Rietveld refinement of synchrotron PXRD data confirmed the structure (Rwp=1.40%). This work demonstrates that 3D-ED can probe unexpected solid-state forms in complex drug product formulations, directly relevant to pharmaceutical development and regulatory solid-form characterisation.`
  },
  {
    year: '2024',
    title: 'Electron diffraction in drug discovery and development: progress, challenges, and prospects',
    journal: 'Submitted for review (2024)',
    summary: `This is a comprehensive review article surveying the role of 3D electron diffraction (3D-ED, also known as MicroED) across the pharmaceutical pipeline — from early drug discovery through to product formulation and manufacturing. Co-authored with collaborators at GSK Medicines Research Centre and the University of Cambridge, it argues that while SCXRD remains the gold standard for crystal structure determination, 3D-ED has emerged as a powerful complement by enabling structure solution from sub-micrometre crystals — volumes up to one million times smaller than those needed for SCXRD. The review covers solid-state applications: polymorph screening and characterisation, co-crystal and salt screening, structure determination of APIs in complex mixtures, and analysis of product formulations such as amorphous solid dispersions. A key forward-looking argument is that 4D scanning electron diffraction (4D-SED) — which uses a nanometre-scale electron probe to create spatially resolved crystallographic maps — will become increasingly important as the next generation of nano-engineered drug modalities require structural characterisation at the nanoscale. The review is guided by a systematic search of the Cambridge Structural Database and synthesises the literature on combined 3D-ED and 4D-SED as complementary tools for improving pharmaceutical product quality and patient outcomes.`
  },
];

// ── RESEARCHER BIOGRAPHY (additional context for chat) ────────
// Drawn from Helen's own biographical materials.
const BIO_CONTEXT = `Helen W. Leung is a researcher in the Department of Materials Science and Metallurgy at the University of Cambridge, working with Prof. Paul Midgley. She completed her PhD at Cambridge in collaboration with industrial sponsor GSK plc, focused on multi-modal electron and X-ray diffraction techniques applied to pharmaceutical and biologically relevant materials. She holds a first-class MEng in Materials Science from the University of Oxford, where her final-year project involved developing convolutional neural networks for electron micrograph image analysis under Prof. Angus Kirkland.

Her core research expertise is in 3D electron diffraction (3D-ED / MicroED) and 4D scanning transmission electron microscopy (4D-STEM) for crystal structure determination and microstructure characterisation of beam-sensitive organic and pharmaceutical compounds. Specific areas include: solving previously unknown crystal structures from sub-micron crystals; identifying and characterising polymorphism, polytypism, twinning, and planar disorder in layered molecular crystals; applying these techniques to pharmaceutical formulations including amorphous solid dispersions and long-acting injectables.

Beyond structural science, Helen is a Student Fellow at the Leverhulme Centre for the Future of Intelligence (LCFI) at Cambridge, where her research explores AI applications in precision medicine — particularly how multi-modal data and AI can advance nanomedicine design, and how to address bias and health equity in AI-driven healthcare tools. She has a specific interest in the gender health gap and femtech innovation, and has worked to develop AI tools for predicting sex-specific drug dosages from clinical trial data.`;

// ── SYSTEM PROMPT ─────────────────────────────────────────────
function buildSystemPrompt() {
  const pubList = PUBLICATIONS.map((p, i) =>
    `${i + 1}. (${p.year}) "${p.title}" — ${p.journal}\n\n   ${p.summary}`
  ).join('\n\n---\n\n');

  return `You are a research assistant for Helen W. Leung. Your role is to answer \
questions about Helen's published research and scientific background clearly and accurately.

You may ONLY discuss topics directly related to Helen's research, publications, and \
scientific expertise as described below. Do not answer general knowledge questions, \
give medical advice, discuss other researchers' work in isolation, or respond to \
anything unrelated to Helen's scientific work.

If asked something outside this scope, respond only with:
"I can only answer questions about Helen's research and publications."

── ABOUT HELEN ──────────────────────────────────────────────
${BIO_CONTEXT}

── PUBLICATIONS (full detail) ───────────────────────────────
${pubList}

── GUIDELINES ───────────────────────────────────────────────
- Keep every response to 2–4 sentences maximum.
- Write for an intelligent non-specialist audience — clear, accurate, minimal jargon.
- Never fabricate findings, citations, or details not present in the text above.
- Do not speculate beyond what is stated above.
- If asked about a specific technical detail not covered above, say so honestly rather \
than guessing.`;
}

// Build once at startup
const SYSTEM_PROMPT = buildSystemPrompt();

// ── INPUT VALIDATION ──────────────────────────────────────────
const INJECTION_PATTERNS = [
  /ignore\s+previous\s+instructions/i,
  /you\s+are\s+now/i,
  /disregard/i,
  /system:/i,
  /forget\s+(all\s+)?(previous|prior|above)/i,
  /new\s+instructions/i,
  /act\s+as/i,
  /pretend\s+(you\s+are|to\s+be)/i,
];

function validateMessage(text) {
  if (typeof text !== 'string' || text.trim().length === 0) {
    return { valid: false, reason: 'Message cannot be empty.', cleaned: '' };
  }

  // Hard character limit
  if (text.length > 500) {
    return { valid: false, reason: 'Message exceeds 500 characters.', cleaned: '' };
  }

  // Strip HTML tags and script content
  const cleaned = text
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();

  // Prompt injection patterns
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(cleaned)) {
      return {
        valid: false,
        reason: 'Your message contains content that cannot be processed.',
        cleaned: '',
      };
    }
  }

  // Rough token estimate (word count × 1.3)
  const estimatedTokens = cleaned.split(/\s+/).length * 1.3;
  if (estimatedTokens > 300) {
    return {
      valid: false,
      reason: 'Message is too long — please keep it under ~230 words.',
      cleaned: '',
    };
  }

  return { valid: true, reason: null, cleaned };
}

// ── MIDDLEWARE ────────────────────────────────────────────────

// Layer 2: CORS — only accept requests from the configured origin
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Layer 3: Body parsing
app.use(express.json({ limit: '10kb' }));

// ── RATE LIMITERS ─────────────────────────────────────────────

// Layer 4: Burst limiter — 3 requests per minute per IP
const minuteLimiter = rateLimit({
  windowMs:       60 * 1000,
  max:            3,
  standardHeaders: true,
  legacyHeaders:  false,
  message:        { error: "Too many requests — please wait a moment before trying again." },
});

// Layer 5: Hourly limiter — 10 requests per hour per IP
const hourLimiter = rateLimit({
  windowMs:       60 * 60 * 1000,
  max:            10,
  standardHeaders: true,
  legacyHeaders:  false,
  message:        { error: "You've reached the request limit — please try again later." },
});

// ── ROUTES ────────────────────────────────────────────────────

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Link preview — fetch og:image from whitelisted paper URLs only
const PREVIEW_WHITELIST = new Set([
  'https://journals.iucr.org/m/issues/2024/05/00/of5005/index.html',
  'https://www.nature.com/articles/s42004-025-01729-2',
  'https://pubs.acs.org/doi/full/10.1021/acs.cgd.4c01594',
]);

app.get('/api/preview', async (req, res) => {
  const url = req.query.url;
  if (!url || !PREVIEW_WHITELIST.has(url)) {
    return res.status(400).json({ error: 'URL not allowed.' });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const pageRes = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html',
      },
    });
    clearTimeout(timeout);

    const html = await pageRes.text();

    // Extract og:image — try both attribute orderings
    const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
           || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

    res.json({ image: m ? m[1] : null });
  } catch (err) {
    console.error('[Preview fetch error]', err.message);
    res.json({ image: null });
  }
});

// Chat endpoint — rate limiters applied here only, not globally
app.post('/api/chat', minuteLimiter, hourLimiter, async (req, res) => {
  // Extract message
  const rawMessage = req.body && req.body.message;
  if (!rawMessage) {
    return res.status(400).json({ error: 'No message provided.' });
  }

  // Validate and sanitise
  const { valid, reason, cleaned } = validateMessage(rawMessage);
  if (!valid) {
    return res.status(400).json({ error: reason });
  }

  // Call Anthropic — errors never leak to the frontend
  try {
    const response = await anthropic.messages.create({
      model:      MODEL,
      max_tokens: 500,
      system:     SYSTEM_PROMPT,
      messages:   [{ role: 'user', content: cleaned }],
    });

    const reply = response.content[0].text;
    return res.json({ reply });

  } catch (err) {
    // Log full error server-side only
    console.error('[Anthropic API error]', err);
    return res.status(500).json({
      error: 'Something went wrong. Please try again in a moment.',
    });
  }
});

// ── START ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[server] Proxy running on http://localhost:${PORT}`);
  console.log(`[server] Accepting requests from: ${process.env.ALLOWED_ORIGIN}`);
  console.log(`[server] Publications loaded: ${PUBLICATIONS.length}`);
});
