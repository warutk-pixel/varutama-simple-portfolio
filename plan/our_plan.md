# Detailed Portfolio Website Plan: Data Analyst

## Objective
Build and deploy a modern, dark-themed personal portfolio website as a data analyst on GitHub Pages.

## 1. Technical Stack
- **Languages:** HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Typography:** Google Fonts - [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).
- **Hosting:** GitHub Pages (Public repository).

## 2. Structural Outline
### A. `index.html` (Semantic Layout)
- **`<header>`**: Logo/Name (Warut Kruakaeo), simple navigation links.
- **`<section id="hero">`**: Main heading "Warut Kruakaeo (Teacher)", sub-headline (Data Analyst tagline).
- **`<section id="projects">`**: 3-column grid layout for projects.
    - Project Card Component: Title, brief description, tech stack tags (e.g., SQL, Python, Tableau), link to code/live demo.
- **`<section id="contact">`**: Contact form or simple links (Email, LinkedIn, GitHub).
- **`<footer>`**: Copyright info.

### B. `style.css` (Theming)
- **Root Variables**: Dark color palette (Background: #121212, Primary Text: #e0e0e0, Accent: #00ff9d or similar).
- **Typography**: Apply `font-family: 'JetBrains Mono', monospace;`.
- **Layout**: CSS Flexbox and Grid for responsiveness.
- **Components**: Stylized project cards with hover effects.

### C. `script.js` (Interactivity)
- Smooth scrolling for internal navigation.
- Simple fade-in animation for project cards on scroll (Intersection Observer API).

## 3. Step-by-Step Execution
1.  **Preparation**: Initialize project folder with `index.html`, `style.css`, and `script.js`.
2.  **Base Layout**: Build `index.html` structure.
3.  **Styling**: Apply the dark theme and JetBrains Mono typography.
4.  **Content Injection**: Populate with your projects (Placeholder titles/descriptions for now) and contact info.
5.  **GitHub Setup**:
    - Create repo `portfolio`.
    - Git init, add, commit, push.
6.  **Activation**: Enable Pages in Repository Settings.

## 4. Verification & Quality Assurance
- **Responsive Audit**: Test layout on 320px (mobile) and 1024px+ (desktop) widths.
- **Accessibility Check**: Ensure contrast ratio meets WCAG standards for dark mode.
- **Link Verification**: Test all social and external project links.
