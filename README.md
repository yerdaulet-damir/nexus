# NU Nexus Club - Landing Page

A professional Next.js landing page for NU Nexus Club, showcasing the entrepreneurship culture at Nazarbayev University.

## Features

- 🎨 Modern, responsive design following the provided specifications
- 🔵 Brand color (#0058CC) consistently applied throughout
- 📱 Fully responsive on all devices
- 🎠 Interactive event carousel with left/right navigation
- 👥 Horizontally scrollable team section
- ⚡ Built with Next.js 14, React 18, and Tailwind CSS
- 🖼️ Optimized images with Next.js Image component

## Project Structure

```
nexus/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Top navigation bar
│   │   ├── EventCarousel.tsx   # Events section with carousel
│   │   ├── TeamCarousel.tsx    # Scrollable team members
│   │   └── Footer.tsx          # Footer with social links
│   ├── data/
│   │   ├── events.ts           # Events data
│   │   └── team.ts             # Team members data
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/
│   ├── events/                 # Event images
│   ├── photos/                 # Team member photos
│   └── ...                     # Other assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Sections

1. **Header** - Navigation with logo, menu links, and login button
2. **Hero** - Large hero image with inspiring tagline
3. **Who We Are** - Mission statement with blue accent bar
4. **Events We Made** - Carousel showcasing past events with descriptions
5. **Team** - Horizontally scrollable cards of team members
6. **Join the Community** - Call-to-action buttons
7. **Footer** - Social media links

## Customization

### Colors

The primary brand color is defined in `tailwind.config.ts`:

```typescript
colors: {
  nexus: {
    blue: '#0058CC',
  },
}
```

### Team Members

Edit `app/data/team.ts` to add/remove team members.

### Events

Edit `app/data/events.ts` to add/remove events.

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js Image** - Optimized image component

## License

© 2025 NU Nexus Club. All rights reserved.
# nexus
