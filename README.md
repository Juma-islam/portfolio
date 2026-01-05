# Meriem's Portfolio - React Version with Advanced Animations

A modern, responsive portfolio website built with React and Vite, featuring stunning Framer Motion and GSAP animations for a professional and eye-catching experience.

## 🚀 Features

- ⚡ Built with Vite for fast development and building
- ⚛️ React 18 with modern hooks and functional components
- 🎨 Tailwind CSS for styling with custom color scheme
- 🌙 Dark mode support (enabled by default)
- 📱 Fully responsive design for all devices
- ✨ **Advanced Framer Motion animations** for smooth page transitions
- 🎭 **GSAP animations** for complex scroll-triggered effects
- 🎯 Interactive navigation with smooth GSAP scrolling
- 📧 Contact form with animated submission states
- 🎨 Animated gradient backgrounds and glow effects
- 🔄 Project filtering with smooth transitions
- 📊 Animated skill progress bars with shimmer effects
- 🎪 Floating icons with physics-based animations
- 💫 Loading screen with elegant transitions
- 🎨 Hover effects and micro-interactions throughout

## 🎬 Animation Features

### Framer Motion Animations:
- **Page Loading**: Elegant loading spinner with scale and rotation
- **Scroll Animations**: Components animate in as they enter viewport
- **Staggered Children**: Sequential animation of list items
- **Layout Animations**: Smooth transitions when filtering projects
- **Hover Effects**: Scale, rotate, and glow effects on interactive elements
- **Form Interactions**: Input focus animations and submission states

### GSAP Animations:
- **Smooth Scrolling**: Enhanced navigation with eased scrolling
- **Floating Elements**: Physics-based floating icon animations
- **Progress Bars**: Animated skill progress with shimmer effects
- **Image Effects**: Hover transformations and scroll-triggered reveals
- **Background Elements**: Continuous floating background animations

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Animations**: Framer Motion, GSAP with ScrollTrigger
- **Styling**: Tailwind CSS
- **Icons**: Material Icons
- **Fonts**: Google Fonts (Outfit)
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd react-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and visit:**
```
http://localhost:5173
```

### 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### 👀 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
react-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx           # About section with scroll animations
│   │   ├── BackgroundEffects.jsx # Animated floating backgrounds
│   │   ├── Contact.jsx         # Contact form with submission animations
│   │   ├── Footer.jsx          # Footer with staggered animations
│   │   ├── Hero.jsx            # Hero section with complex animations
│   │   ├── Navbar.jsx          # Navigation with scroll effects
│   │   ├── Projects.jsx        # Projects with filter transitions
│   │   └── Skills.jsx          # Skills with animated progress bars
│   ├── App.jsx                 # Main app with loading screen
│   ├── index.css              # Global styles and custom animations
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── package.json               # Dependencies including Framer Motion & GSAP
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── vite.config.js             # Vite configuration
```

## 🎨 Animation Customization

### Framer Motion Variants
Each component uses custom animation variants for consistent timing:
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}
```

### GSAP Animations
Complex animations use GSAP for precise control:
```javascript
gsap.to(element, {
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: element,
    start: "top 80%"
  }
})
```

## 🎯 Performance Optimizations

- Vite for fast bundling and hot module replacement
- Optimized animations with `will-change` CSS properties
- Efficient re-renders with React.memo where needed
- GSAP ScrollTrigger for performant scroll animations
- Framer Motion layout animations for smooth transitions
- Minimal JavaScript bundle size with tree shaking

## 🎪 Interactive Elements

- **Floating Icons**: Physics-based animations in hero section
- **Skill Bars**: Animated progress with shimmer effects
- **Project Cards**: Hover transformations and overlay animations
- **Form Elements**: Focus animations and submission states
- **Navigation**: Smooth scrolling with easing functions
- **Social Links**: Rotation and scale effects on hover

## 📱 Responsive Animations

- Animations adapt to screen size and device capabilities
- Reduced motion support for accessibility
- Touch-friendly interactions on mobile devices
- Optimized performance across all devices

## 🌙 Dark Mode Animations

- Smooth transitions between light and dark themes
- Animated color changes for all elements
- Consistent animation timing across themes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, Vite, Framer Motion, and GSAP**