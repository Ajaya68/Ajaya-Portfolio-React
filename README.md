# Ajaya Mahanty — Portfolio (React)

A modern, dark-themed personal portfolio built with **React + Vite**. This is a full migration of the original vanilla HTML/CSS/JS portfolio into a component-based React application.

## Tech Stack

- **React 19** + **Vite 8**
- **Bootstrap 5** (responsive grid & components)
- **Bootstrap Icons**
- **Inter** (Google Fonts)
- ESLint (react-hooks + react-refresh)

## Features

- Fixed pill navigation with scroll-spy (active section highlight)
- Sticky nav that gains a blurred background on scroll
- Hero section with availability badge, stats, profile image & CV download
- Skills grid, project cards & certification cards — all rendered from data files
- Contact form wired to [Web3Forms](https://web3forms.com)
- Animated floating orbs in the footer
- Back-to-top button
- Fully responsive (mobile / tablet / desktop)

## Getting Started

```bash
# install dependencies
npm install

# start the dev server (hot reload)
npm run dev

# lint
npm run lint

# production build
npm run build

# preview the production build
npm run preview
```

## Project Structure

```
├── index.html                  # entry HTML (fonts, favicon, root div)
├── vite.config.js
├── eslint.config.js
├── public/
│   ├── images/                 # profile & logo images
│   └── resume/                 # CV PDF
└── src/
    ├── main.jsx                # app entry (bootstrap + portfolio.css)
    ├── App.jsx                 # composes all sections
    ├── data/                   # all site content lives here
    │   ├── personal.js         # name, tagline, stats, resume path
    │   ├── navigation.js       # nav links
    │   ├── skills.js           # tools & technologies
    │   ├── projects.js         # portfolio projects
    │   ├── certification.js    # certificates
    │   └── socialLinks.js      # social media links
    ├── components/             # one component per section
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── ProjectCard.jsx
    │   ├── Certification.jsx
    │   ├── CertificationCard.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   └── BackToTop.jsx
    └── styles/
        └── portfolio.css       # global styles (dark theme)
```

## Customizing Content

All content is data-driven. To update your site, edit the files in `src/data/` — no component code changes needed:

| What | File |
| --- | --- |
| Name, tagline, stats, resume | `src/data/personal.js` |
| Nav links | `src/data/navigation.js` |
| Skills / tools | `src/data/skills.js` |
| Projects | `src/data/projects.js` |
| Certificates | `src/data/certification.js` |
| Social links | `src/data/socialLinks.js` |

The contact form uses a Web3Forms access key in `src/components/Contact.jsx`.

## Contact

- GitHub: [Ajaya68](https://github.com/Ajaya68)
- LinkedIn: [ajaya-mahanty](https://linkedin.com/in/ajaya-mahanty)
- Email: ajayafullstackdev@gmail.com

Designed & Built by © 2026 **AJAYA MAHANTY**
