# Event Roster & Material Distribution Tool

[简体中文](README_zh.md) | [Live Demo / GitHub Pages](https://zhengjack88.github.io/event-roster-tool/)

A lightweight, single-file HTML web tool designed for event volunteers to verify participant rosters, distribute materials, and check clothing sizes on-site (marathons, trail runs, cycling races, etc.).

## Key Features

- 🚀 **Single File & Zero Dependency**: Pure HTML/CSS/JS. No backend server or database required.
- 🌐 **Bilingual Support**: Real-time language switcher (English / 简体中文).
- 🔍 **Instant Multi-Field Search**: Search by Bib Number, Participant Name, Phone Number, or National ID.
- 📦 **Size Filter & Real-Time Stats**: Filter by clothing size (S, M, L, XL, 2XL, etc.) with dynamic count.
- 🖨️ **Print Optimized**: One-click reset, clean print styles, and mobile responsiveness.
- 🔒 **100% Client-Side Privacy**: Runs completely offline in the browser. Zero telemetry or data leakage.

## Quick Start

### Option 1: Live Demo
Access directly via GitHub Pages:
👉 **[https://zhengjack88.github.io/event-roster-tool/](https://zhengjack88.github.io/event-roster-tool/)**

### Option 2: Local Offline
1. Download `index.html`.
2. Double click to open in any web browser.

## Customizing Roster Data

Open `index.html` in any text editor, locate `const roster = [...]` in the `<script>` tag, and replace with your own event participant records:

```javascript
const roster = [
  { no: "1", bib: "1001", name: "John Doe", phone: "13800138001", id: "110101199001011234", size: "L" },
  { no: "2", bib: "1002", name: "Jane Smith", phone: "13800138002", id: "310101199202022345", size: "M" }
];
```

## License

MIT License
