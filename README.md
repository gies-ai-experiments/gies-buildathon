# Gies AI for Impact Challenge

**Agentic AI Build-a-Thon** — A 24-hour innovation competition for Gies College of Business students at the University of Illinois Urbana-Champaign.

**Live site:** [landing-page-woad-pi-94.vercel.app](https://landing-page-woad-pi-94.vercel.app)

## About

The Gies AI for Impact Challenge brings together undergraduate and graduate students from Gies College of Business to build AI-powered solutions for real business problems. Over 24 hours, teams compete across five focused tracks, working alongside industry mentors and presenting to expert judges.

### Competition Tracks

| Track | Description |
|-------|-------------|
| Finance & Accounting | Reimagine financial workflows and automate accounting processes |
| HR | Create solutions for talent acquisition, employee experience, and workforce analytics |
| Marketing & Sales | Build tools for customer engagement, analytics, and go-to-market strategies |
| General Innovation | Open track for bold ideas that defy categories |
| Business Technology | Develop infrastructure, automation, and enterprise solutions |

## Tech Stack

- **Single-file HTML** with inline CSS and JavaScript — no build tools or frameworks
- **Fonts:** Source Sans 3, Montserrat, Open Sans Condensed (official Gies brand typography)
- **Colors:** Illini Navy (`#13294B`) + Illini Orange (`#E84A27`)
- **Hosting:** Vercel

## Project Structure

```
gies-buildathon/
├── index.html              # Landing page (HTML + CSS + JS)
├── assets/
│   ├── images/             # Background and hero images
│   │   ├── gies-atrium.png
│   │   ├── gies-building.jpg
│   │   ├── gies-building-2.jpg
│   │   └── gies-exterior-night.png
│   └── logos/              # Sponsor and partner logos
│       ├── logo-agenticai.png
│       ├── logo-dlab.png
│       ├── logo-gies.png
│       ├── logo-google.png
│       └── logo-google.webp
└── README.md
```

## Features

- Animated hero section with typewriter effect
- Scroll-triggered reveal animations
- Interactive card tilt effects
- Custom cursor with glow trail
- Particle system background
- Parallax scrolling
- Fully responsive (mobile-first)
- Accessible FAQ accordion

## Sponsors & Partners

- **Gies College of Business** — [giesbusiness.illinois.edu](https://giesbusiness.illinois.edu/)
- **Google** — [google.com](https://home.google.com/welcome/)
- **Agentic AI @ UIUC**
- **Disruption Lab**

## Development

No build step required. Open `index.html` in a browser or serve locally:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

## Deployment

Deployed to Vercel:

```bash
vercel --prod
```

## License

All rights reserved. Gies College of Business, University of Illinois Urbana-Champaign.
