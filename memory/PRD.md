# Artamedia Website (imported)
Problem: Deploy and run artamedia website from https://github.com/zainaris19/artamedianet.git
- 2026-06: Imported repo unchanged (React + FastAPI + MongoDB). Running on preview. Production deploy cancelled by user.
- Endpoints: GET /api/, POST/GET /api/status, POST /api/contact
Backlog: production deploy when user is ready.
- 2026-06: Added Broadband Business page (/services/broadband-business) per user reference screenshot; Services dropdown in navbar; EN/ID content in src/broadbandContent.js; quote CTAs open contact modal pre-filled "Broadband Internet". User images in public/broadband/. Customer Stories uses labeled image slot + pending testimonial (awaiting verified content). Brochure button opens contact modal until PDF uploaded.
Backlog: brochure PDF, verified testimonial + photo, Business/Custom tab pricing (if verified), footer "Broadband Internet" link to new page.
- 2026-06: Added Dedicated Network page (/services/dedicated-network) from user reference; Services dropdown entry; EN/ID in src/dedicatedContent.js; asset map in components/dedicated/assets.js (DN-MAP, DN-NOC slots empty awaiting user upload batch 2). Quote CTAs preset "Dedicated Internet".
Backlog: fill DN-MAP + DN-NOC when uploaded; Metro Ethernet, Dark Fiber, DWDM, Backup on Demand pages.
- 2026-06: Dedicated page batch 2: DN-MAP (map.png) and DN-NOC (noc.png) filled; hero replaced with HD Artamedia tower (1175x682).
- 2026-06: Added Metro Ethernet page (/services/metro-ethernet), Services dropdown entry, EN/ID in src/metroContent.js, asset map components/metro/assets.js. Filled: ME-HERO, ME-OVERVIEW, ME-DIAGRAM, ME-TOPOLOGY. Empty slots awaiting batch 2: ME-MAP, ME-IND-1..6, ME-WHY, ME-STORY, ME-CTA. Quote CTAs preset "Metro Ethernet".
- 2026-06: Metro batch 2 filled ME-MAP, ME-IND-1..6 (sprite from industries.webp), ME-WHY (corridor), ME-CTA (skyline). ME-STORY still empty (no customer photo yet).
- 2026-06: Added Dark Fiber page (/services/dark-fiber), Services dropdown entry, EN/ID in src/darkFiberContent.js, assets in components/darkfiber/assets.js. Filled: DF-HERO, DF-ABOUT, DF-BENEFITS, use-case sprite. Empty slots: DF-MAP, DF-PANEL, DF-CTA. Tech specs (G.652D/G.657, 10G/40G/100G+) are user-provided copy pending Artamedia verification.
