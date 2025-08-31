# PartyWave - Social Gatherings Platform

![App Preview](https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=300&fit=crop&auto=format&q=80)

A vibrant, Gen Z-friendly platform that curates and facilitates private social gatherings. PartyWave connects hosts with guests for verified, curated experiences ranging from themed socials to premium networking events.

## ✨ Features

- **🎉 Event Discovery** - Browse curated events with smart filtering by category, location, date, and price
- **🎯 Host Verification** - Secure signup with email/phone verification for trusted event creation
- **💳 Secure Payments** - Integrated Stripe payments with escrow protection until events occur
- **📊 Analytics Dashboard** - Real-time insights with charts showing ticket sales, revenue, and engagement
- **💬 Guest Management** - Host approval workflows with integrated pre-event messaging
- **🔔 Smart Notifications** - Automated reminders and confirmations for seamless event management
- **📱 Mobile-First Design** - Responsive interface with vibrant gradients and smooth animations
- **🎨 Dynamic Categories** - Color-coded event types (Social, Workshops, Music, Wellness, Networking, Premium)

<!-- CLONE_PROJECT_BUTTON -->

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Gen Z–friendly, vibrant, interactive MVP web/mobile application for a startup that curates and facilitates private social gatherings. The platform should allow hosts to list events and guests to discover, RSVP, and pay for verified, curated experiences. Use modern UI/UX patterns, bold typography, bright gradients, and subtle animations for a playful yet professional feel.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **Stripe** - Secure payment processing with escrow
- **Cosmic** - Headless CMS for content management
- **Chart.js** - Interactive analytics dashboards
- **React Hook Form** - Form handling and validation
- **Framer Motion** - Smooth animations and micro-interactions

## 🛠️ Getting Started

### Prerequisites

- Bun (recommended) or Node.js 18+
- A Cosmic account and bucket
- Stripe account for payments

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your environment variables in `.env.local`:
   - Add your Cosmic bucket credentials
   - Add your Stripe API keys
   - Set your JWT secret

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📡 Cosmic SDK Examples

### Fetching Events
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all published events with host details
const events = await cosmic.objects
  .find({ type: 'events' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Filter events by category
const socialEvents = await cosmic.objects
  .find({ 
    type: 'events',
    'metadata.category': 'social'
  })
```

### Creating New Bookings
```typescript
// Create a new event booking
const booking = await cosmic.objects.insertOne({
  type: 'bookings',
  title: `Booking for ${eventTitle}`,
  metadata: {
    event: eventId,
    guest: guestId,
    status: 'pending',
    payment_status: 'pending',
    amount: ticketPrice,
    booking_date: new Date().toISOString()
  }
})
```

## 🎨 Cosmic CMS Integration

The application uses Cosmic to manage:

- **Hosts** - User profiles with verification status and event history
- **Events** - Detailed event information with categories, pricing, and media
- **Guests** - User accounts with booking history and preferences  
- **Bookings** - Event reservations with payment and approval status
- **Categories** - Dynamic event categories with icons and descriptions

All content is dynamically fetched from Cosmic, allowing real-time updates without code deployment.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically on every push to main

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Configure environment variables

### Environment Variables for Production
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
JWT_SECRET=your-jwt-secret-32-chars-minimum
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=your-production-url
```
