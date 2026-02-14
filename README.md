# STAR Gaming Website 🎮

A modern, visually stunning gaming channel website built with React, Vite, and Tailwind CSS.

## Features ✨

- **Animated Hero Section** with glowing effects and particles
- **Featured Games Showcase** with hover animations
- **Weekly Streaming Schedule**
- **Community Stats Display**
- **Responsive Design** - works on all devices
- **Modern UI/UX** with purple/pink gradient theme
- **Smooth Animations** throughout the site

## Technologies Used 🛠️

- React 18
- Vite (Lightning fast build tool)
- Tailwind CSS (Utility-first CSS)
- Lucide React (Beautiful icons)

## Prerequisites 📋

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## Installation & Setup 🚀

1. **Navigate to the project folder:**
   ```bash
   cd star-gaming-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The site will automatically open at `http://localhost:3000`
   - If it doesn't, manually navigate to that URL

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure 📁

```
star-gaming-website/
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Customization 🎨

### Change Colors
Edit the gradient colors in `src/App.jsx` - look for `gradient-text` and color classes.

### Update Content
- **Games**: Modify the `games` array in `App.jsx`
- **Schedule**: Update the `schedule` array
- **Stats**: Change values in the `stats` array

### Add Your Own Images
Replace the Unsplash image URLs with your own hosted images.

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting 🔧

**Port already in use?**
- Change the port in `vite.config.js` from 3000 to another number

**Dependencies not installing?**
- Try deleting `node_modules` and `package-lock.json`
- Run `npm install` again

**White screen?**
- Check browser console for errors
- Ensure all dependencies installed correctly

## License 📄

This project is open source and available for personal and commercial use.

## Support 💬

If you encounter any issues or have questions, feel free to reach out!

---

**Enjoy building your gaming empire with STAR! 🌟**
