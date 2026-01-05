# Meriem's Portfolio - React Version

A modern, responsive portfolio website built with React and Vite, featuring a clean design with dark mode support and smooth animations.

## 🚀 Features

- ⚡ Built with Vite for fast development and building
- ⚛️ React 18 with modern hooks and functional components
- 🎨 Tailwind CSS for styling with custom color scheme
- 🌙 Dark mode support (enabled by default)
- 📱 Fully responsive design for all devices
- ✨ Smooth animations and transitions
- 🎯 Interactive navigation with smooth scrolling
- 📧 Contact form with proper state management
- 🎨 Custom gradient backgrounds and glow effects
- 🔄 Project filtering functionality
- 📊 Animated skill progress bars

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
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
│   │   ├── About.jsx           # About section component
│   │   ├── BackgroundEffects.jsx # Animated background effects
│   │   ├── Contact.jsx         # Contact form component
│   │   ├── Footer.jsx          # Footer with navigation
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Projects.jsx        # Projects showcase with filtering
│   │   └── Skills.jsx          # Skills with progress bars
│   ├── App.jsx                 # Main application component
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── vite.config.js             # Vite configuration
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: "#a855f7",        // Main purple color
  secondary: "#d946ef",      // Fuchsia accent
  "background-dark": "#050505", // Dark background
  "card-dark": "#121212",    // Dark card background
}
```

### Content
Update the content in each component file:
- **Personal information**: `Hero.jsx`
- **About section**: `About.jsx`
- **Skills data**: `Skills.jsx`
- **Projects data**: `Projects.jsx`
- **Contact information**: `Contact.jsx`

### Images
Replace the placeholder images with your own:
- Profile images in `Hero.jsx` and `About.jsx`
- Project screenshots in `Projects.jsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ✨ Key React Features Used

- **useState Hook**: For form data, menu toggles, and project filtering
- **useEffect Hook**: For dark mode management
- **Event Handling**: Proper React event handlers for all interactions
- **Component Props**: Passing data between components
- **Conditional Rendering**: Dynamic content based on state
- **Array Mapping**: Rendering lists of skills, projects, and navigation items
- **Form Handling**: Controlled components for the contact form

## 🎯 Performance Optimizations

- Vite for fast bundling and hot module replacement
- Optimized images with proper alt tags
- Efficient CSS with Tailwind's utility classes
- Minimal JavaScript bundle size
- Smooth animations with CSS transitions

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Adaptive navigation (hamburger menu on mobile)
- Flexible typography scaling
- Touch-friendly interactive elements

## 🌙 Dark Mode

- Enabled by default with class-based dark mode
- Smooth transitions between light and dark themes
- Consistent color scheme across all components
- Proper contrast ratios for accessibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React and Vite**