# Engine AI Landing Page

A stunning, cinematic landing page for Engine AI - a premium B2B infrastructure platform for running AI-powered businesses.

## 🎨 Visual Design

The landing page features a bioreactor-inspired aesthetic with:
- **Luminous cyan-blue bubbling water effect** - Canvas-based animation with rising bubbles in columnar patterns
- **Dark charcoal background** - Creates high contrast and cinematic feel
- **Teal-and-steel color scheme** - Professional, corporate yet cutting-edge
- **Volumetric glow effects** - Bioluminescent sci-fi laboratory vibe
- **Micro-interactions** - Hover states, smooth transitions, staggered animations

## ✨ Features

### Hero Section
- Full-screen animated bubbling effect using HTML5 Canvas
- Dense micro-bubbles near base creating fog-like effervescence
- Central column of concentrated bubble flow
- Prominent headline and CTA buttons
- Scroll indicator

### Features Section
- 6 feature cards with hover effects
- Serverless infrastructure, enterprise security, real-time analytics
- Lightning fast performance, developer-first tools, vector database

### Use Cases Section
- 4 detailed use case cards
- AI agents & assistants, conversational AI
- Document intelligence, predictive analytics

### CTA Section
- Strong call-to-action with social proof
- Dual button approach (primary + secondary)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: HTML5 Canvas + CSS animations
- **Deployment**: Vercel

## 🚀 Deployment

**Live URL**: https://engine-ai-landing.vercel.app

## 📁 Project Structure

```
engine-ai-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles + animations
├── components/
│   └── BubblingEffect.tsx   # Canvas-based bubble animation
├── .git/hooks/pre-commit    # Build verification hook
└── package.json
```

## 🎯 Key Implementation Details

### Bubbling Effect (Canvas)
- 12 columns of bubbles with denser central flow
- Random bubble sizes (1-4px radius)
- Varying speeds and opacity for depth
- Outer glow effects for bioluminescence
- Smooth upward movement with subtle horizontal wobble
- Efficient requestAnimationFrame loop

### Accessibility
- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- High color contrast (WCAG compliant)
- Focus-visible states

### Performance
- Optimized canvas rendering
- CSS-based animations where possible
- Minimal JavaScript bundle
- Static page generation
- Lazy loading ready

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deployment

The project is configured for Vercel deployment:

```bash
# Deploy to Vercel
vercel --prod
```

## 🎨 Customization

### Colors
Modify the color scheme in `app/globals.css` and `components/BubblingEffect.tsx`:
- Primary cyan: `#06b6d4`
- Background: `#0a0a0f`
- Text: `#ededed`

### Bubble Effect
Adjust bubble behavior in `components/BubblingEffect.tsx`:
- `numColumns`: Number of bubble columns
- `bubbleCount`: Bubbles per column
- `speed`: Rise velocity
- `radius`: Bubble size range

## 📄 License

Proprietary - Engine AI

---

Built with ❤️ using Next.js and TypeScript
