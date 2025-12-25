# Girls Who Code - Troy High School Chapter Website

A modern, responsive website for the Troy High School Girls Who Code chapter, built with React and Vite.

## About

This website serves the Troy High School Girls Who Code chapter, providing information about our mission, Python workshops, team, and how to join our community.

### Our Mission

To offer free computer science education and programs designed to support girls in learning to code and thrive in tech, aligned with the Girls Who Code national mission and curriculum.

## Features

- **Home Page**: Hero section with chapter overview and quick links
- **About**: Chapter mission, values, and connection to GWC national
- **Workshops**: Python fundamentals curriculum, eligibility, sign-up process, and FAQ
- **Team**: Leadership team and faculty advisor information
- **Gallery**: Photo gallery with lightbox functionality
- **Contact**: Contact methods and inquiry form

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gwc.git
   cd gwc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment to GitHub Pages

### First-time Setup

1. Create a GitHub repository for your project

2. Update the `homepage` in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/gwc"
   ```

3. Update the `base` in `vite.config.js` to match your repository name:
   ```js
   base: '/gwc/',
   ```

4. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/gwc.git
   git push -u origin main
   ```

### Deploy

Run the deploy command:
```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Your site will be live at `https://yourusername.github.io/gwc`

## Customization

### Update Contact Information

Edit the following files to add your actual contact information:

- `src/pages/Contact.jsx` - Update email and social media links
- `src/components/Footer/Footer.jsx` - Update social links
- `src/pages/Join.jsx` - Update the Google Form links

### Add Real Photos

Replace the placeholder gallery items in `src/pages/Gallery.jsx` with actual photos:

1. Add images to `public/images/`
2. Update the gallery array with image paths

### Update Team Information

Edit `src/pages/Team.jsx` to add real team member names and information.

## Project Structure

```
gwc/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   └── Navbar/
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Team.jsx
│   │   └── Workshops.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Color Scheme

The website uses colors inspired by Girls Who Code branding:

- **Coral** `#FF6F61` - Primary accent color
- **Teal** `#1A535C` - Secondary color
- **Cream** `#FFF8F0` - Background color
- **Mint** `#4ECDC4` - Highlight color

## License

This project is created for educational purposes for the Girls Who Code chapter at Troy High School.

## Acknowledgments

- [Girls Who Code](https://girlswhocode.com) - National organization
- [Vite](https://vitejs.dev) - Build tool
- [React](https://reactjs.org) - UI library

---

Made with 💜 by Girls Who Code - Troy High School Chapter


