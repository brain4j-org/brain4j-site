# Brain4j Documentation Site

![Brain4j Logo](./src/assets/brain4j-logo.svg)

A modern documentation site for [Brain4j](https://github.com/brain4j-org/brain4j), a powerful Java library for neural networks and machine learning. This site is built with [Astro](https://astro.build/), [Starlight](https://starlight.astro.build/), [TailwindCSS](https://tailwindcss.com/), and [Preline](https://preline.co/).

## Features

- 📝 **Comprehensive Documentation** - Detailed guides, API reference, and practical examples
- 🎨 **Beautiful Design** - Modern Apple-inspired interface with sleek animations
- 📱 **Fully Responsive** - Works flawlessly on mobile, tablet, and desktop
- 🔍 **Full-Text Search** - Powered by Starlight's built-in search capabilities
- 🚀 **High Performance** - Built with Astro for optimal loading speed
- 🌙 **Dark/Light Mode** - Automatic theme switching based on user preference

## Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/brain4j-org/brain4j-site.git
   cd brain4j-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321/brain4j/` to see the site.

## Documentation Structure

- **Getting Started** - Introduction, installation, and quick start guides
- **Guides** - Core concepts, working with neurons, neural networks, and training
- **API Reference** - Auto-generated API documentation
- **Examples** - Practical code examples for classification, image recognition, and NLP

## Deployment

This site is configured for automatic deployment to GitHub Pages using GitHub Actions. Any push to the main branch will trigger a rebuild and deployment of the site.

### Manual Deployment

To manually build and deploy the site:

1. Build the site:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` directory, which can be deployed to any static hosting service.

## Contributing

We welcome contributions to improve the Brain4j documentation site! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-improvement`)
3. Commit your changes (`git commit -m 'Add some amazing improvement'`)
4. Push to the branch (`git push origin feature/amazing-improvement`)
5. Open a Pull Request

## Customization

This documentation site is built with Astro and Starlight, making it highly customizable:

- Update the configuration in `astro.config.mjs`
- Modify the styles in `src/styles/custom.css`
- Customize Tailwind settings in `tailwind.config.mjs`

## License

This project is licensed under the [Apache License 2.0](./LICENSE).