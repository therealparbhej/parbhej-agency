# PixelPulse Studio - Agency Website

A modern, visually stunning, and conversion-focused agency website for a creative digital design studio.

## 🎨 Features

- **Dark Theme with Neon Accents** - Purple, blue, and pink glow effects
- **Futuristic UI** - Clean, minimal design with smooth animations
- **Fully Responsive** - Mobile-first approach for all devices
- **Fast Loading** - Optimized performance and lazy loading
- **Interactive Elements** - Hover effects, scroll animations, and more

## 📁 Project Structure

```
parbhej agency/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Main stylesheet with dark theme
│   └── responsive.css     # Mobile responsiveness
├── js/
│   ├── main.js            # Core functionality
│   └── animations.js      # Advanced animations
└── README.md              # This file
```

## 🚀 Getting Started

### Option 1: Direct Opening
Simply open `index.html` in your web browser.

### Option 2: Live Server (Recommended)
1. Install VS Code "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Using Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd "parbhej agency"

# Start server
http-server -p 8000

# Open browser to http://localhost:8000
```

## 🎯 Sections Included

1. **Hero Section** - Eye-catching headline with animated gradient background
2. **Services** - 6 service cards showcasing offerings
3. **Portfolio** - Filterable grid with hover effects
4. **About** - Company story and highlights
5. **Pricing** - 3-tier pricing packages
6. **Testimonials** - Client reviews
7. **Contact** - Working contact form
8. **Footer** - Social links and navigation

## ⚙️ Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --neon-purple: #b983ff;
    --neon-blue: #00d4ff;
    --neon-pink: #ff0080;
}
```

### Fonts
Google Fonts are loaded in `index.html`. Change the link tags to use different fonts.

### Content
Update text content directly in `index.html`.

### Images
Replace Unsplash placeholder URLs with your actual portfolio images.

## 🎨 Key Design Features

- Smooth scroll-triggered animations
- Sticky navigation bar
- Mobile hamburger menu
- Portfolio filtering system
- Form validation
- Counter animations
- Parallax effects
- Glow effects on hover
- Gradient backgrounds
- Bold typography

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 767px and below

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels for navigation
- Keyboard navigation support
- Focus states for interactive elements
- Reduced motion support

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Form Integration

The contact form is currently set up for demonstration. To make it functional:

1. **Formspree** (Easy)
   - Sign up at https://formspree.io
   - Replace form action with your Formspree URL

2. **EmailJS** (Advanced)
   - Integrate EmailJS for client-side email sending

3. **Backend API** (Custom)
   - Create a Node.js/PHP backend to handle submissions

## 🔧 Advanced Features (Optional)

Some features are disabled by default in `js/animations.js`:

- Mouse trail effect (`mouseTrailEnabled = true`)
- Custom cursor (`customCursorEnabled = true`)
- Typing effect (`typingEffectEnabled = true`)

Enable these by changing the boolean values to `true`.

## 📊 Performance Tips

1. Optimize images before adding them
2. Use WebP format for better compression
3. Enable gzip compression on your server
4. Use a CDN for production
5. Minify CSS and JS for production

## 🎉 Next Steps

1. Replace placeholder images with your portfolio
2. Update contact information
3. Customize colors to match your brand
4. Add your actual services and pricing
5. Test on multiple devices
6. Deploy to your hosting platform

## 🚀 Deployment

Recommended platforms:
- **Netlify** - Drag & drop deployment
- **Vercel** - Git-based deployment
- **GitHub Pages** - Free hosting
- **Traditional Hosting** - Upload via FTP

## 📄 License

This template is free to use for personal and commercial projects.

---

**Created with ❤️ for PixelPulse Studio**

For questions or support, contact: hello@pixelpulse.studio
