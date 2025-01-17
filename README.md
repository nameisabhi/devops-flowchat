# DevOps Architecture Flow Chart

An interactive visualization of the DevOps architecture and workflow using React and Tailwind CSS.

## Project Overview

This project creates a visual representation of a DevOps architecture, starting with the Developer Workspace environment. It features animated connections and a clean, modern design.

## Features (Developer Workspace)

- Responsive layout with Tailwind CSS
- Animated arrows showing workflow direction
- Interactive hover states
- Clean, modern UI design
- Dark theme optimized for readability

## Tech Stack

- React.js
- Tailwind CSS
- Lucide React Icons
- PostCSS

## Project Setup

1. Create a new React project:
```bash
npx create-react-app devops-flowchart
cd devops-flowchart
```

2. Install dependencies:
```bash
npm install lucide-react tailwindcss postcss autoprefixer
```

3. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

## Project Structure
```
devops-flowchart/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── DevOpsFlow/
│   │       └── index.js         # Main DevOps flow component
│   ├── styles/
│   │   └── flowchart.css       # Custom animations and styles
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Component Details

### DevOps Flow Component
- Main container for the flow chart
- Implements the Developer Workspace section
- Features:
  - VS Code IDE box
  - Animated connection arrow
  - Local Git Repository box

### Styling
- Tailwind CSS for layout and basic styling
- Custom animations for flow indicators
- Dark theme with accent colors
- Responsive design

## Running the Project

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Colors
- Main background: `bg-[#0B1222]`
- Workspace section: `bg-[#0F172A]`
- Border accents: `border-blue-500`
- Text colors: varying shades of white and gray

### Animations
Custom animations are defined in `flowchart.css`:
- `animate-flow-right`: Arrow animation
- Duration: 2 seconds
- Infinite loop

## Next Steps
- Implementation of CI/CD Platform section
- Build & Package components
- Additional workflow connections

## Contributing
Feel free to submit issues and pull requests.

## License
MIT License