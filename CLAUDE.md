# Helen Portfolio — Claude Code Instructions
We're working on helen-portfolio/index.html — pick up where we left off
## Project overview
Single-file portfolio website (index.html) for Helen, a life science 
VC and scientist. Spider diagram navigation with two views: My Work 
and About Me. Each node opens a slide-in side panel.

## Ways of working
- Always plan before executing — show me the steps and wait for approval
- Make one change at a time, confirm before moving to the next
- After each task, give me a plain English summary of what changed
- Notify me clearly when fully done
- Never delete or overwrite existing content without checking first
- All changes should be committed and pushed to the `main` branch — always state explicitly when about to push to main and confirm before doing so

## Code preferences
- Keep everything in a single index.html file unless I say otherwise
- Preserve the existing design tokens and CSS variables
- Add comments when introducing new sections of code
- Test that the file still opens correctly in browser after changes

## My goals
- Personal branding site for VC/science networking
- Prioritise clean, minimal aesthetic
- Site should always be easy to hand to a non-technical person to update

## Content management
All website content lives in content.js — always edit content 
there, never hardcode text directly into index.html.