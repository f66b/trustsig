# TrustSig Landing Page

A fully responsive, professional landing page for TrustSig - a decentralized legal contract management and arbitration platform powered by blockchain technology.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 13+ (App Router), React, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Lazy loading, optimized images, and smooth animations
- **Accessibility**: ARIA labels and semantic HTML for better accessibility
- **Beautiful Animations**: Smooth scroll animations powered by Framer Motion

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 16.8 or later
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trustsig-landingPage
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Required Assets

Make sure the following images are placed in the `/public` directory:

- `heroBackgroundPattern.jpg` - Hero section background
- `logo.png` - TrustSig logo
- `RiskFreeBadge.png` - Risk-free badge
- `ImmutableContracts.jpg` - Feature image
- `RobustCompliance.jpg` - Feature image
- `VerifiableTrust.jpg` - Feature image
- `Step1Upload_Tokenize.png` - Process step icon
- `Step2SmartContractExecution.png` - Process step icon
- `Step3On-ChainArbitration.png` - Process step icon
- `SecurityComplianceBadgesISO27001.png` - Compliance badge
- `GDPRCompliant.png` - Compliance badge
- `NEARProtocolSecured.png` - Security badge
- `IPFSArweaveEncryption.png` - Technology badge
- `EnterpriseLogosBarPlaceholderLogos.png` - Enterprise partners logos
- `Bottom-BandAccentTexture.jpg` - Footer background texture

## 🎨 Design System

### Colors
- **Deep Navy Blue**: `#0A1128`
- **Charcoal Gray**: `#36454F`
- **Silver Accent**: `#C0C0C0`

### Typography
- **Headings**: Trajan Pro (with Georgia fallback)
- **Body**: Montserrat (with system-ui fallback)

## 📱 Sections

1. **Hero Section**: Full-screen hero with CTA
2. **Feature Trio**: 3-column grid showcasing main features
3. **Feature Carousel**: 6 feature cards in a responsive layout
4. **How It Works**: 3-step process visualization
5. **Enterprise Logos**: Partner logos display
6. **Compliance Shields**: Security and compliance badges
7. **Social Proof**: User testimonials
8. **CTA Footer**: Email capture with final call-to-action

## 🏗️ Project Structure

```
trustsig-landingPage/
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── Hero.tsx         # Hero section component
│   ├── FeatureTrio.tsx  # Feature trio grid
│   ├── FeatureCarousel.tsx # Feature carousel
│   ├── HowItWorks.tsx   # Process steps
│   ├── EnterpriseLogos.tsx # Partner logos
│   ├── ComplianceShields.tsx # Compliance badges
│   ├── SocialProof.tsx  # Testimonials
│   └── CTAFooter.tsx    # Footer with CTA
├── public/              # Static assets (images)
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🚀 Deployment

To build for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `.next` directory. You can deploy to:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## 📄 License

This project is proprietary to TrustSig. All rights reserved.

## 🤝 Contributing

For any questions or contributions, please contact the TrustSig development team. 