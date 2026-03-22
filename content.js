// ── UI STRINGS (bilingual) ─────────────────────────────────
const UI = {
  en: {
    navWork:    'My Work',
    navAbout:   'About Me',
    navContact: 'Contact ↗',
    cmHeading:  'Get in <em>touch.</em>',
    cmSub:      'Always interested to hear new points of view...',
  },
  zh: {
    navWork:    '我的工作',
    navAbout:   '关于我',
    navContact: '联系 ↗',
    cmHeading:  '与我<em>联系。</em>',
    cmSub:      '创始人、投资者、研究者及合作者 — 欢迎与Helen建立连接。',
  }
};

// ── CONTENT (bilingual) ────────────────────────────────────
const CONTENT = {

  work: {
    eyebrow:  { en: 'My Work',  zh: '我的工作' },
    headline: {
      en: 'My work spans the drug discovery + development pipeline',
      zh: '覆盖药物发现与开发全管线的专业经验'
    },
    tagline: {
      en: 'From target identification to commercial investment.',
      zh: '从靶点识别到商业投资。'
    },

    // ── PIPELINE STAGES ──────────────────────────────────────
    // Each stage: tag, title, sublabel, badgeAbbr, badgeLabel, badgeImg, body
    // To use a logo image: set badgeImg to the file path, e.g. 'logos/cambridge.png'
    // Leave badgeImg as null to display the text abbreviation instead.
    pipeline: [
      {
        tag:        { en: 'My PhD Research',   zh: '研究'   },
        title:      { en: 'Drug Discovery',  zh: '药物发现' },
        sublabel:   { en: 'Selecting promising drug candidates', zh: '药物晶体学 · 冷冻电镜 · 小分子' },
        badgeAbbr:  'CAM',
        badgeLabel: { en: 'University of Cambridge', zh: '剑桥大学' },
        badgeImg:   'logos/cambridge.png.webp',
        body: {
          en: `
            <p class="card-text">Completed my PhD in the Electron Microscopy Group at Cambridge University. Discovered 5 small molecule crystal structures.
            Published <a class="card-link" href="#" onclick="openAboutCard(1); return false;">4 first-author papers</a>.</p>
            <div class="pill-row">
              <span class="pill">Pharmaceutical Crystallography</span>
              <span class="pill">Cryo-EM</span>
              <span class="pill">Small Molecules</span>
              <span class="pill">3D Electron Diffraction</span>
              <span class="pill">Polymorphism</span>
            </div>`,
          zh: `<p class="card-text">（中文内容待填写）</p>`
        }
      },
      {
        tag:        { en: 'Industrial R&D Role',   zh: '工业界' },
        title:      { en: 'Drug Development', zh: '药物开发' },
        sublabel:   { en: 'Designing drug delivery modalities', zh: '长效注射剂 · 纳米科学 · 电子显微镜' },
        badgeAbbr:  'GSK',
        badgeLabel: { en: 'GSK', zh: 'GSK' },
        badgeImg:   'logos/gsk.png',
        body: {
          en: `
            <p class="card-text">Embedded in Medicines Supply and Development team at GSK R&D alongside PhD. Developed nano-milling processes to enhance slow-release properties of cabotegravir, a long-acting injectable HIV drug.</p>
            <div class="pill-row">
              <span class="pill">Long-Acting Injectables</span>
              <span class="pill">Cabotegravir</span>
              <span class="pill">Nanoscience</span>
              <span class="pill">Drug Manufacturing</span>
            </div>`,
          zh: `<p class="card-text">（中文内容待填写）</p>`
        }
      },
      {
        tag:        { en: 'AI x Materials Developer at Altrove (EF-backed startup)', zh: 'AI与材料' },
        title:      { en: 'Manufacturing', zh: '制造' },
        sublabel:   { en: 'Making manufacturing smarter', zh: '晶体结构预测 · 虚拟实验室 · 稀土矿物' },
        badgeAbbr:  'ALT',
        badgeLabel: { en: 'Altrove', zh: 'Altrove' },
        badgeImg:   'logos/altrove_ai_logo.jpeg',
        // Oxford node stacked below Altrove on the left
        leftBadge: {
          abbr:    'OX',
          label:   { en: 'University of Oxford', zh: '牛津大学' },
          img:     'logos/oxford.png.jpeg',
          tag:     { en: 'Undergrad and Masters Education', zh: '教育' },
          title:   { en: 'Materials Engineering', zh: '材料工程' },
          sublabel:{ en: 'Semiconductors · Analytical techniques · Manufacturing', zh: '半导体 · 分析技术 · 制造' },
          body: {
            en: `
              <p class="card-text">First-class MEng from Oxford, specialising in analytical techniques in semiconductors for transistors. Developed expertise in advanced manufacturing techniques across semiconductors and pharmaceuticals alike. Developed convolutional neural network to analyse experimental data.</p>
              <div class="pill-row">
                <span class="pill">Nanoengineering</span>
              </div>`,
            zh: `<p class="card-text">（中文内容待填写）</p>`
          }
        },
        body: {
          en: `
            <p class="card-text">Freelance AI Researcher: developed structure prediction capabilities (to streamline production of rare-earth minerals) at <a href="https://www.altrove.ai" target="_blank" rel="noopener" class="card-link">Altrove</a>, a deep-tech startup (at seed round). Built a virtual lab connecting experimental outputs to the in-house AI model.</p>
            <div class="pill-row">
              <span class="pill">Crystal Structure Prediction</span>
              <span class="pill">Virtual Lab/AI dev</span>
              <span class="pill">Entrepreneurs First</span>
            </div>`,
          zh: `<p class="card-text">（中文内容待填写）</p>`
        }
      },
      {
        tag:        { en: 'My Core Interests',   zh: '临床'   },
        title:      { en: 'Clinical Development', zh: '临床开发' },
        sublabel:   { en: 'Getting the right drugs to the right people', zh: '性别健康差距 · 可解释AI · 女性健康科技' },
        badgeAbbr:  'LCFI',
        badgeLabel: { en: 'Leverhulme Centre for the Future of Intelligence', zh: 'LCFI' },
        badgeImg:   'logos/lcfi.png.jpeg',
        body: {
          en: `
            <p class="card-text">As a Fellow at LCFI (Leverhulme Centre for the Future of Intelligence, Cambridge) — hosted founder events to highlight disparities in health equity and built tools to predict sex-specific drug dosages from clinical trial data, addressing bias embedded in AI models and the dangerous legacy of missing data.</p>
            <div class="pill-row">
              <span class="pill">Gender Health Gap</span>
              <span class="pill">Explainable AI</span>
              <span class="pill">FemTech</span>
              <span class="pill">Health Equity</span>
              <span class="pill">Precision Medicine</span>
              <span class="pill">Clinical Trial Diversity</span>
            </div>`,
          zh: `<p class="card-text">（中文内容待填写）</p>`
        }
      },
      {
        tag:        { en: 'Life Sciences Strategy and Due Diligence', zh: '风险投资' },
        title:      { en: 'Commercial', zh: '商业化与并购' },
        sublabel:   { en: 'Making a medicine a commercial success', zh: '药物战略 · 商业与供应商尽职调查' },
        badgeAbbr:  'LEK',
        badgeLabel: { en: 'L.E.K. Consulting', zh: 'L.E.K. 咨询' },
        badgeImg:   'logos/lek.png',
        /* Morgan Stanley bubble — commented out, restore leftBadge to re-enable
        leftBadge: {
          abbr:    'MS',
          label:   { en: 'Morgan Stanley', zh: '摩根士丹利' },
          img:     null,
          tag:     { en: 'Trading Technology', zh: '交易科技' },
          title:   { en: 'Morgan Stanley', zh: '摩根士丹利' },
          sublabel:{ en: 'European Equities · Trading Technology · ML', zh: '欧洲股票 · 交易科技 · 机器学习' },
          body: {
            en: `
              <p class="card-text">Trading Business and Data Analyst in European Equities Trades Technology — data flow and analysis of the bank's trading activity through the London Stock Exchange. Built an ML model to flag anomalies in trading data.</p>
              <div class="pill-row">
                <span class="pill">European Equities</span>
                <span class="pill">Trading Technology</span>
                <span class="pill">Data Analysis</span>
                <span class="pill">Machine Learning</span>
              </div>`,
            zh: `<p class="card-text">（中文内容待填写）</p>`
          }
        },
        */
        body: {
          en: `
            <p class="card-text">Life Sciences Specialist at L.E.K. Consulting (London).  
            Specialising in pharmaceutical strategy, commercial due diligence, and vendor due diligence.  
            Active interest/involvement in China–Europe cross-border activity.</p>
            <div class="pill-row">
              <span class="pill">Pharmaceutical Strategy</span>
              <span class="pill">Commercial Due Diligence</span>
              <span class="pill">Vendor Due Diligence</span>
              <span class="pill">New Drug Modalities</span>
              <span class="pill">Medical Manufacturing</span>
              <span class="pill">China–Europe</span>
            </div>`,
          zh: `<p class="card-text">（中文内容待填写）</p>`
        }
      }
    ]
  },

  about: {
    eyebrow:  { en: 'About Me', zh: '关于我' },
    headline: { en: '', zh: '' },
    tagline: {
      en: "I've worked in both the lab and the boardroom. I care about getting the right medicines to the right people.",
      zh: '从实验室到董事会，Helen是一位材料科学家与研究者，研究领域横跨药物表征、纳米医学与精准医疗人工智能。'
    },
    cards: [
      {
        title:   { en: 'Background & Bio', zh: '个人简介' },
        preview: { en: 'Journey from bench to boardroom', zh: '从实验台到董事会的职业历程' },
        body: {
          en: `
            <p class="card-text">Trained as a materials scientist at Oxford, I specialised in semiconductor manufacturing before I moved to Cambridge for a GSK-sponsored PhD. There, I developed manufacturing processes to engineer the slow-release properties of cabotegravir, a long-acting injectable HIV drug. In parallel, I was a Fellow at the Leverhulme Centre for the Future of Intelligence, hosting meetups in the startup bubble at Cambridge, focused on health equity initiatives. I have since moved to commercial strategy at L.E.K. Consulting, specialising in pharmaceutical strategy and M&A. Being both British and Chinese, I have a strong interest in the Chinese biotech ecosystem and how this will influence the international stage.</p>
            <div class="pill-row">
              <span class="pill">Pharmaceutical Strategy</span>
              <span class="pill">AI in Healthcare</span>
              <span class="pill">New Drug Modalities</span>
              <span class="pill">Health Equity</span>
              <span class="pill">China–Europe</span>
            </div>`,
          zh: `
            <p class="card-text">（中文内容待填写）</p>
            <div class="pill-row">
              <span class="pill">药物战略</span>
              <span class="pill">医疗AI</span>
              <span class="pill">新型药物模式</span>
              <span class="pill">健康公平</span>
              <span class="pill">中欧跨境</span>
            </div>`
        }
      },
      {
        tag:     { en: 'Research',      zh: '研究'   },
        title:   { en: 'Publications',  zh: '发表论文' },
        preview: { en: 'Nanoscience · Drug Delivery · Materials', zh: '纳米科学 · 药物递送 · 材料' },
        body: {
          en: `
            <!-- ── RESEARCH CHAT WIDGET — commented out for MVP; restore for Phase 5
            <div class="chat-widget" id="chat-widget">
              <div class="chat-widget-header">
                <span class="chat-widget-title">Ask about my research</span>
                <span class="chat-widget-meta" id="chat-remaining">Powered by Claude · 10 questions remaining</span>
              </div>
              <div class="chat-messages" id="chat-messages">
                <div class="chat-msg assistant">Hi — I can answer questions about Helen's published research. What would you like to know?</div>
              </div>
              <div class="chat-input-row">
                <textarea id="chat-input" placeholder="Ask a question about Helen's research…" maxlength="500" rows="2"></textarea>
                <button id="chat-send">Send</button>
              </div>
              <div class="chat-footer-row">
                <span id="chat-char-count">0 / 500</span>
                <span id="chat-error"></span>
              </div>
            </div>
            ──────────────────────────────────────────────────────── -->

            <!-- ── FULL PAPER LINKS ───────────────────────────── -->
            <div class="pub-links">
              <p class="pub-links-label">Read the full papers</p>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://journals.iucr.org/m/issues/2024/05/00/of5005/index.html" target="_blank" rel="noopener">From formulation to structure: 3D electron diffraction for the structure solution of a new indomethacin polymorph from an amorphous solid dispersion ↗</a>
                <p class="pub-link-author">Helen W. Leung* et al. · IUCrJ, 2024 <span class="iucr-badge">International Union of Crystallography</span></p>
                <img class="pub-link-preview" src="figures/Leung_indomethacin_paper.png" alt="Indomethacin paper figure" loading="lazy">
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://www.nature.com/articles/s42004-025-01729-2" target="_blank" rel="noopener">Polytypes and planar defects revealed in the purine base xanthine using multi-dimensional electron diffraction ↗</a>
                <p class="pub-link-author">Helen W. Leung* et al. · Communications Chemistry, 2025 <span class="nature-badge">Nature Portfolio</span></p>
                <img class="pub-link-preview" src="figures/Leung_xanthinepaper2.png" alt="Xanthine polytypes paper figure" loading="lazy">
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://pubs.acs.org/doi/full/10.1021/acs.cgd.4c01594" target="_blank" rel="noopener">Revealing the crystal structure of the purine base xanthine with three-dimensional (3D) electron diffraction ↗</a>
                <p class="pub-link-author">Helen W. Leung* et al. · Crystal Growth &amp; Design, 2025 <span class="acs-badge">American Chemical Society</span></p>
                <img class="pub-link-preview" src="figures/Leung_xanthinepaper1.png" alt="Xanthine crystal structure paper figure" loading="lazy">
              </div>
              <p class="pub-footnote">* First author</p>
            </div>`,
          zh: `
            <!-- ── RESEARCH CHAT WIDGET — commented out for MVP; restore for Phase 5
            <div class="chat-widget" id="chat-widget">
              <div class="chat-widget-header">
                <span class="chat-widget-title">询问我的研究</span>
                <span class="chat-widget-meta" id="chat-remaining">由 Claude 提供支持 · 剩余 10 次提问</span>
              </div>
              <div class="chat-messages" id="chat-messages">
                <div class="chat-msg assistant">您好——我可以回答关于Helen发表研究的问题。请问您想了解什么？</div>
              </div>
              <div class="chat-input-row">
                <textarea id="chat-input" placeholder="请提问关于Helen研究的问题……" maxlength="500" rows="2"></textarea>
                <button id="chat-send">发送</button>
              </div>
              <div class="chat-footer-row">
                <span id="chat-char-count">0 / 500</span>
                <span id="chat-error"></span>
              </div>
            </div>
            ──────────────────────────────────────────────────────── -->

            <!-- ── FULL PAPER LINKS ───────────────────────────── -->
            <div class="pub-links">
              <p class="pub-links-label">阅读完整论文</p>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://journals.iucr.org/m/issues/2024/05/00/of5005/index.html" target="_blank" rel="noopener">From formulation to structure: 3D electron diffraction for the structure solution of a new indomethacin polymorph from an amorphous solid dispersion ↗</a>
                <p class="pub-link-author">Helen W. Leung* et al. · IUCrJ, 2024 <span class="iucr-badge">International Union of Crystallography</span></p>
                <img class="pub-link-preview" src="figures/Leung_indomethacin_paper.png" alt="Indomethacin paper figure" loading="lazy">
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://www.nature.com/articles/s42004-025-01729-2" target="_blank" rel="noopener">Polytypes and planar defects revealed in the purine base xanthine using multi-dimensional electron diffraction ↗</a>
                <p class="pub-link-author">Helen W. Leung* et al. · Communications Chemistry, 2025 <span class="nature-badge">Nature Portfolio</span></p>
                <img class="pub-link-preview" src="figures/Leung_xanthinepaper2.png" alt="Xanthine polytypes paper figure" loading="lazy">
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://pubs.acs.org/doi/full/10.1021/acs.cgd.4c01594" target="_blank" rel="noopener">Revealing the crystal structure of the purine base xanthine with three-dimensional (3D) electron diffraction ↗</a>
                <p class="pub-link-author">Helen W. Leung* et al. · Crystal Growth &amp; Design, 2025 <span class="acs-badge">American Chemical Society</span></p>
                <img class="pub-link-preview" src="figures/Leung_xanthinepaper1.png" alt="Xanthine crystal structure paper figure" loading="lazy">
              </div>
              <p class="pub-footnote">* First author</p>
            </div>`
        }
      },
      /* Other Interests card — commented out for MVP, restore to re-enable
      {
        tag:     { en: 'Personal',       zh: '个人'   },
        title:   { en: 'Other Interests', zh: '其他兴趣' },
        preview: { en: 'Beyond the lab and the boardroom', zh: '实验室与董事会之外' },
        body: {
          en: `
            <p class="card-text">On another note, I love pottery, painting, and music! </p>
            <div class="pill-row">
              <span class="pill">Classical Music</span>
              <span class="pill">Pottery</span>
              <span class="pill">Art</span>
            </div>`,
          zh: `
            <p class="card-text">塑造Helen思维方式的好奇心与热情——实验室与董事会之外。</p>
            <div class="pill-row">
              <span class="pill">古典音乐</span>
              <span class="pill">陶艺</span>
              <span class="pill">艺术</span>
            </div>`
        }
      }
      */
    ]
  }
};

// ── PUBLICATIONS ──────────────────────────────────────────────
// Each entry: { year, title, journal, summary }
// summary = 1–2 sentence plain-English description of the paper's
//           methods and key finding — used as AI chat context.
//
// IMPORTANT: when you update entries here, also update the matching
// PUBLICATIONS array in server.js so the chat widget stays in sync.
const PUBLICATIONS = [
  {
    year: '2025',
    title: 'Polytypes and planar defects revealed in the purine base xanthine using multi-dimensional electron diffraction',
    journal: 'Communications Chemistry, 8, 331',
    doi: 'https://doi.org/10.1038/s42004-025-01729-2',
    summary: `This paper uses a combination of 3D electron diffraction (3D-ED) and 4D scanning transmission electron microscopy (4D-STEM) to explore the microstructure of xanthine crystals in detail. Building directly on the first xanthine paper, it identifies twinning in Form I xanthine (a 180° rotation relationship between crystal domains about the [101] axis), solves the structure of a new second polymorph of xanthine called Form II (orthorhombic, space group P2₁2₁2₁, unit cell a=10.10 Å, b=12.54 Å, c=17.91 Å), and shows that Form II is a polytype of Form I — meaning both share identical intra-layer hydrogen-bonded arrangements but differ in how those layers stack. Form I stacking follows an ABAB sequence; Form II follows ABCD, with the layer repeating every four layers. 4D-STEM directly visualises twin boundaries, polytype interfaces, and fine-scale planar disorder (stacking faults at near-random intervals) within individual sub-micron particles of xanthine — demonstrating that a single particle can contain multiple coexisting crystal forms. A multiphase Rietveld refinement of high-resolution synchrotron X-ray powder diffraction (XRPD) data, incorporating a stacking fault model, confirmed these findings in bulk powder. The work argues that disorder on the nanoscale is likely common in layered organic molecular crystals more broadly, with implications for pharmaceutical polymorphism characterisation and regulatory requirements.`
  },
  {
    year: '2025',
    title: 'Revealing the crystal structure of the purine base xanthine with three-dimensional (3D) electron diffraction',
    journal: 'Crystal Growth & Design, 25, 1293–1298',
    doi: 'https://doi.org/10.1021/acs.cgd.4c01594',
    summary: `This paper reports the first crystal structure determination of xanthine (3,7-dihydropurine-2,6-dione), a purine base found widely in organisms and a metabolic precursor to uric acid. Despite xanthine's fundamental biological importance — it is chemically closely related to guanine, hypoxanthine, theophylline, caffeine, and theobromine — its crystal structure had remained unknown because its crystals are too small (sub-micrometre) for conventional single-crystal X-ray diffraction (SCXRD) and strong preferred orientation complicated powder X-ray diffraction analysis. Using 3D electron diffraction (3D-ED) on a Thermo Fisher Titan Krios G3i transmission electron microscope at 300 kV, the structure was solved from a single ~300 nm crystal. The structure (named Form I) is monoclinic with space group P2₁/c, unit cell a=9.82 Å, b=17.87 Å, c=6.79 Å, β=107.5°, with two crystallographically independent xanthine molecules per asymmetric unit (Z'=2). The data quality was sufficient to locate all hydrogen atom positions without geometric restraints, confirming the presence of the expected 7H-tautomer. The crystal structure consists of two-dimensional hydrogen-bonded layers — with four N–H···O and two N–H···N interactions — stacked approximately parallel to the (101̄) planes with an interlayer spacing of ~3.2 Å (weak van der Waals forces). The hydrogen-bonding network shows strong similarity to hypoxanthine crystals. Synchrotron powder X-ray diffraction data suggested the presence of additional polymorphic forms and planar disorder, which were investigated in the follow-up paper. This structure determination opens opportunities for understanding biogenic xanthine crystals found in insect eyes and other organisms, where xanthine is used to manipulate light.`
  },
  {
    year: '2024',
    title: 'From formulation to structure: 3D electron diffraction for the structure solution of a new indomethacin polymorph from an amorphous solid dispersion',
    journal: 'IUCrJ, 11, 744–748',
    doi: 'https://doi.org/10.1107/S2052252524008121',
    summary: `This paper demonstrates 3D electron diffraction (3D-ED) applied directly to a pharmaceutical product formulation — an amorphous solid dispersion (ASD) — rather than a purified single-phase sample. Amorphous solid dispersions are a common formulation strategy for poorly soluble drugs: the active pharmaceutical ingredient (API) is dispersed within an amorphous water-soluble polymer to improve dissolution. An ASD of indomethacin (a well-known non-steroidal anti-inflammatory drug, BCS class II) and polyvinylpyrrolidone (PVP) was prepared by solvent evaporation using dichloromethane (DCM). Within the 95:5 indomethacin:PVP ASD, powder X-ray diffraction revealed an unexpected new crystalline form that did not match any of the eight previously known indomethacin polymorphs. Using 3D-ED on a Thermo Fisher Titan Krios G3i at 300 kV, the crystal structure of this new ninth polymorph — called σ (sigma) — was solved from a single crystal (monoclinic C2/c, a=43.70 Å, b=5.19 Å, c=33.43 Å, β=100.73°, Z'=2). The structure contains two conformationally similar but crystallographically independent indomethacin molecules forming a carboxylic acid dimer. Notably, 12% of the unit-cell volume consists of open hydrophobic channels parallel to the b axis, leading to the hypothesis that DCM molecules acted as a solvent template during crystallisation. This was confirmed by producing the same σ polymorph via simple evaporation of a DCM solution of pure indomethacin at room temperature. The σ polymorph is metastable relative to the thermodynamically stable γ phase and has a more open structure that may exhibit different dissolution properties. Rietveld refinement of synchrotron PXRD data confirmed the structure (Rwp=1.40%). This work demonstrates that 3D-ED can probe unexpected solid-state forms in complex drug product formulations — directly relevant to pharmaceutical development and regulatory solid-form characterisation requirements.`
  },
  {
    year: '2024',
    title: 'Electron diffraction in drug discovery and development: progress, challenges, and prospects',
    journal: 'Submitted for review (2024)',
    doi: null,
    summary: `This is a comprehensive review article surveying the role of 3D electron diffraction (3D-ED, also known as MicroED) across the pharmaceutical pipeline — from early drug discovery through to product formulation and manufacturing. Co-authored with collaborators at GSK Medicines Research Centre and the University of Cambridge, it argues that while SCXRD remains the gold standard for crystal structure determination, 3D-ED has emerged as a powerful complement by enabling structure solution from sub-micrometre crystals — volumes up to one million times smaller than those needed for SCXRD. The review covers solid-state applications in detail: polymorph screening and characterisation, co-crystal and salt screening, structure determination of APIs in complex mixtures, and the analysis of product formulations such as amorphous solid dispersions. It also includes a brief discussion of macromolecular (protein) 3D-ED for completeness. A key forward-looking argument is that 4D scanning electron diffraction (4D-SED) — which uses a nanometre-scale electron probe to create spatially resolved crystallographic maps — will become increasingly important as the next generation of drug modalities (nano-engineered medicines, long-acting injectables) require structural characterisation at the nanoscale. The review is guided by a systematic search of the Cambridge Structural Database and synthesises the literature on combined 3D-ED and 4D-SED as complementary tools for improving pharmaceutical product quality and patient outcomes.`
  },
];
