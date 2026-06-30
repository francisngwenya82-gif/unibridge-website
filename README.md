# UniBridge Consultancy Website

A modern, responsive website for UniBridge Consultancy - Your Bridge to Higher Education.

## Features

- **Hero Section** - Engaging landing page with call-to-action
- **Services** - Showcase of 6 key services offered
- **Why Choose Us** - Statistics and differentiators
- **Testimonials** - Student success stories
- **Contact Form** - Lead generation and inquiries
- **Responsive Design** - Mobile-friendly across all devices
- **Modern UI** - Navy blue and gold color scheme matching brand identity

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS (vanilla, no dependencies)
- **Hosting**: Ready for Vercel deployment

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/francisngwenya82-gif/unibridge-website.git

# Navigate to project
cd unibridge-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Click Deploy

Vercel automatically builds and deploys on every push to main.

### Custom Domain

1. In Vercel dashboard, go to Settings > Domains
2. Add your domain
3. Follow DNS configuration instructions

## File Structure

```
unibridge-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js config
└── README.md               # This file
```

## Customization

### Update Contact Information
Edit the contact section in `app/page.tsx` with your actual details:
- Phone number
- Email address
- Office address
- Hours

### Modify Services
Update the service cards in the Services section to match your offerings.

### Add Logo
Replace the text logo with an image:
```tsx
<img src="/logo.png" alt="UniBridge" height="40" />
```

### Change Colors
Modify CSS variables in `app/globals.css`:
```css
:root {
  --navy: #002855;   /* Change this */
  --gold: #d4af37;   /* And this */
}
```

## SEO

- Meta title and description in `app/layout.tsx`
- Semantic HTML structure
- Fast performance (optimized by Next.js)
- Mobile responsive

## Support

For questions or issues, contact the development team.

## License

Private - UniBridge Consultancy
