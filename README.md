# Hunter Xia - Personal Portfolio

A modern, responsive personal portfolio website showcasing my work as an aspiring Software Engineer and Machine Learning Enthusiast. Built with Next.js and featuring a clean, professional design with dark mode support.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark Mode**: Toggle between light and dark themes
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Component Architecture**: Organized using atomic design principles
- **SEO Optimized**: Structured for search engine visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Animations**: Tailwind CSS animations with custom keyframes
- **Type Safety**: Enhanced with JSConfig

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hunterxia/personal_portfolio.git
   cd personal_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (tabs)/            # Route groups
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   └── projects/      # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── page.js           # Home page
│   └── ThemContext.js    # Theme context provider
└── components/            # UI Components
    ├── atoms/             # Basic UI elements
    ├── molecules/         # Component combinations
    └── organisms/         # Complex components
```

## 🎨 Customization

### Theme Colors
The color scheme can be customized in `tailwind.config.js`. The project uses CSS custom properties for theming:

```javascript
colors: {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  // ... more theme colors
}
```

### Components
Components are organized using atomic design principles:
- **Atoms**: Basic elements (buttons, inputs, etc.)
- **Molecules**: Simple combinations of atoms
- **Organisms**: Complex UI sections

## 📱 Sections

- **Hero**: Introduction and main call-to-action
- **About**: Personal background and skills
- **Projects**: Portfolio of development work
- **Contact**: Ways to get in touch

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📄 License

This project is private and personal. All rights reserved.

