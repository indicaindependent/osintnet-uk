# osintnet.uk

[![Live](https://img.shields.io/badge/Live-osintnet.uk-ef4444?style=for-the-badge&logo=cloudflare)](https://osintnet.uk)
[![Platform](https://img.shields.io/badge/Platform-Cloudflare%20Workers-f38020?style=for-the-badge&logo=cloudflare)](https://workers.cloudflare.com)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

Landing page for **Indica Independent Media** — a directory of open-source intelligence tools and civic AI platforms.

## Tools Featured

| Tool | Description | URL |
|---|---|---|
| SENTINEL | Surveillance contract AI agent | sentinel.osintnet.uk |
| FaceHeatMap | Facial recognition tracker | faceheatmap.app |
| StraitTracker | Hormuz geopolitical intel | tracker.warheatmap.app |
| WarHeatMap | Global conflict mapping | warheatmap.app |
| AiecoSense | Environmental justice AI | aiecosense.com |
| VoxTerrae | Citizen voice platform | voxterrae.app |
| NY BizHer | LLC wizard for women entrepreneurs | bizher.osintnet.uk |

## Deploy

```bash
curl -X PUT "https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/workers/scripts/indica-landing" \
  -H "Authorization: Bearer ${CF_API_TOKEN}" \
  -H "Content-Type: application/javascript" \
  --data-binary @worker.js
```

*MIT License — Indica Independent Media 2026*
