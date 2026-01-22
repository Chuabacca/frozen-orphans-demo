# Frozen Orphans Documentary Website - Development Plan

## Project Overview
Build a single-page cinematic website for the Frozen Orphans documentary film with subtle animations, professional design, and donation integration capability.

**Timeline**: MVP demo today  
**Framework**: Next.js 14+ (App Router)  
**Hosting**: Vercel (recommended for easy deployment)

---

## Design System

### Color Palette
- **Brand Primary**: `#ADD8E6` (Light Blue)
- **Cinematic Dark**: `#0A0A0A` (Near Black)
- **Charcoal**: `#1A1A1A` (Dark Gray)
- **Slate**: `#2D2D2D` (Medium Gray)
- **Off White**: `#F5F5F5` (Light Gray)
- **Accent**: `#FFFFFF` (White for text/highlights)

### Typography
- **Headings**: Inter or Montserrat (clean, modern, cinematic)
- **Body**: Inter or System UI Stack (accessible, readable)
- **Accent/Taglines**: Optional: Playfair Display or Crimson Text for elegance
- All fonts should be optimized via Next.js font optimization

### Animation Principles
- Subtle, Apple-style micro-interactions
- Fade-ins on scroll (Intersection Observer)
- Smooth hover states (scale, opacity)
- Page load animations (stagger effects)
- 60fps performance priority
- Respect `prefers-reduced-motion`

---

## Technical Stack

### Core
- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS + CSS Modules for complex animations
- **Animations**: Framer Motion
- **Icons**: Lucide React or Heroicons
- **Image Optimization**: Next.js Image component

### Video Requirements
- **Format**: MP4 (H.264 codec)
- **Recommended Resolution**: 1920x1080 (Full HD)
- **Bitrate**: 3-5 Mbps (balance quality/size)
- **CDN**: Cloudflare Stream, Mux, or Vimeo (recommend Cloudflare for cost)
- **Fallback**: Static poster image for mobile/slow connections
- **File size target**: Under 10MB for autoplay background
- **Compression**: Use HandBrake or FFmpeg to optimize

### Hosting & Deployment
- **Platform**: Vercel (free tier sufficient for MVP)
- **Domain**: TBD
- **SSL**: Automatic via Vercel
- **Analytics**: Vercel Analytics (optional: Plausible)

---

## Site Structure

### Fixed Header (Sticky)
**Layout**: Full-width, translucent background with blur effect on scroll

**Left Side**:
- Film logo (SVG, ~40px height)
- Film title text

**Right Side**:
- Primary CTA button: "Support the Film" (links to #mission or future donation page)
- Style: Outlined button with brand color, subtle hover animation

**Behavior**:
- Initially transparent
- Adds background blur/tint on scroll past hero
- Smooth transition between states

---

### Section 1: Hero
**Layout**: Full viewport height (100vh)

**Background**:
- Looping video (muted, autoplay, playsinline)
- Dark overlay (opacity 40-50%) for text readability
- Fallback poster image for mobile

**Content** (Centered vertically):

**Left Side** (~50% width):
- Large tagline (H1, 48-72px)
- Optional subtitle/description (smaller, lighter weight)
- Fade-in animation on load

**Right Side** (~50% width):
- Stylized heart logo (SVG or PNG with transparency)
- Subtle pulse or float animation

**Bottom**:
- Scroll indicator (animated chevron or text: "Scroll to explore")

---

### Section 2: Story (3 Protagonists)
**Layout**: Container max-width 1200px, centered

**Header**:
- Section title: "The Story" or "Meet the Protagonists"
- Optional subtitle

**Content**:
- 3-column grid (responsive: stack on mobile)
- Each protagonist:
  - **Circle portrait** (280-320px diameter)
  - **Name** (H3, centered below image)
  - **One-sentence description** (Body text, centered)
  - Hover effect: subtle scale + shadow

**Animation**: Stagger fade-in on scroll

**Style**: Clean, documentary aesthetic with ample whitespace

---

### Section 3: Media Gallery
**Layout**: Full-width carousel

**Header**:
- Section title: "Behind the Scenes" or "Media"
- Centered above carousel

**Carousel**:
- Sliding image carousel (5 images initially, expandable)
- Images: 16:9 or 3:2 aspect ratio maintained
- Controls: Subtle prev/next arrows, dot indicators
- Autoplay: Optional, 5-second intervals
- Touch/swipe enabled on mobile
- No captions or text overlays

**Library**: Use Embla Carousel or Swiper.js

**Animation**: Smooth slide transitions, lazy loading

---

### Section 4: Mission
**Layout**: Container max-width 1200px, centered

**Header**:
- Section title: "Our Mission"
- Optional subtitle

**Content**:
- 3-column grid (responsive: stack on mobile)
- Each goal:
  - **Simple icon** (50-60px, brand color or white)
  - **Title** (H3, bold)
  - **One-sentence description** (Body text)
  - Vertical layout: icon → title → description

**CTA**:
- Secondary button: "Learn How to Help" or "Support Our Mission"
- Centered below the 3 goals
- Links to placeholder (future donation page)

**Animation**: Fade + slide up on scroll

---

### Section 5: Team
**Layout**: Container max-width 1200px, centered

**Header**:
- Section title: "The Team"

**Content**:
- 5-column grid (responsive: 2 cols tablet, 1 col mobile)
- Each team member:
  - **Square or circle headshot** (220-260px)
  - **Name** (H4)
  - **Title/Role** (Body text, lighter color)
  - Simple, no hover effects or bios

**Animation**: Stagger fade-in on scroll

---

### Section 6: Footer
**Layout**: Full-width, dark background (#1A1A1A)

**Content** (3-column layout, responsive stack):

**Column 1** (Logo & Tagline):
- Film logo (smaller version)
- Brief tagline or copyright

**Column 2** (Links):
- Navigation: About, Story, Mission, Team, Contact (placeholders)
- Social media icons (placeholders: Instagram, Facebook, Twitter/X, Vimeo)

**Column 3** (Newsletter):
- "Stay Updated" heading
- Email input field
- Subscribe button
- Placeholder form (can integrate Mailchimp later)

**Bottom Bar**:
- Copyright notice: "© 2025 Frozen Orphans. All rights reserved."
- Legal links: Privacy Policy, Terms of Use (placeholders)

**Style**: Minimalist, good contrast, accessible

---

## Implementation Checklist

### Phase 1: Setup (30 min)
- [ ] Initialize Next.js project with TypeScript
- [ ] Install dependencies: Tailwind, Framer Motion, Lucide Icons
- [ ] Configure Tailwind with custom colors
- [ ] Set up project structure (`/components`, `/app`, `/public`)
- [ ] Add fonts via Next.js font optimization

### Phase 2: Header & Hero (45 min)
- [ ] Build sticky header component
- [ ] Implement scroll-based background transition
- [ ] Create hero section with video background
- [ ] Add fallback poster image logic
- [ ] Implement tagline and heart logo layout
- [ ] Add scroll indicator animation

### Phase 3: Story Section (30 min)
- [ ] Create protagonist card component
- [ ] Implement 3-column responsive grid
- [ ] Add circle image masks
- [ ] Implement scroll-triggered stagger animation
- [ ] Use placeholder images (via Unsplash or lorem.picsum)

### Phase 4: Media Carousel (45 min)
- [ ] Integrate Embla Carousel or Swiper
- [ ] Configure autoplay and touch controls
- [ ] Add navigation arrows and dots
- [ ] Implement lazy loading
- [ ] Use placeholder images

### Phase 5: Mission Section (30 min)
- [ ] Create mission goal card component
- [ ] Select/create 3 simple icons
- [ ] Implement 3-column grid
- [ ] Add CTA button
- [ ] Implement scroll animation

### Phase 6: Team Section (30 min)
- [ ] Create team member card component
- [ ] Implement 5-column responsive grid
- [ ] Add placeholder headshots
- [ ] Implement stagger animation

### Phase 7: Footer (30 min)
- [ ] Build footer layout (3 columns)
- [ ] Add placeholder links and social icons
- [ ] Create newsletter signup form (non-functional MVP)
- [ ] Add legal placeholders
- [ ] Ensure responsive design

### Phase 8: Polish & Optimization (45 min)
- [ ] Add smooth scroll behavior
- [ ] Implement Intersection Observer for all scroll animations
- [ ] Add `prefers-reduced-motion` support
- [ ] Optimize images (Next.js Image component)
- [ ] Test mobile responsiveness
- [ ] Add meta tags for SEO
- [ ] Test video autoplay on mobile (add poster fallback)
- [ ] Add loading states
- [ ] Cross-browser testing

### Phase 9: Deployment (15 min)
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Configure domain (if available)
- [ ] Test production build
- [ ] Verify all animations work in production

---

## Content Placeholders Needed

### Text
- Hero tagline (large, impactful)
- Hero subtitle (optional)
- 3 protagonist names + descriptions
- 3 mission goal titles + descriptions
- 5 team member names + titles
- Footer tagline
- Any additional microcopy

### Visual Assets
- Film logo (SVG preferred)
- Stylized heart logo (SVG or PNG)
- Hero background video (MP4, optimized)
- Hero fallback poster image
- 3 protagonist portraits (circle crop-friendly)
- 5 pre-production photos for carousel
- 3 mission icons (can be from icon library initially)
- 5 team headshots
- Favicon

---

## Future Enhancements (Post-MVP)

### Immediate Next Steps
- Integrate real donation platform (Givebutter/Zeffy)
- Add functional newsletter signup (Mailchimp/ConvertKit)
- Replace placeholder social/contact links
- Add Privacy Policy and Terms pages

### Content Expansion
- Blog/News section for production updates
- Press kit download page
- Screening events calendar
- Full trailer video modal
- Extended team bios (modal or dedicated page)

### Technical Improvements
- CMS integration (Sanity/Contentful) for easy content updates
- Video testimonials section
- Multi-language support
- Advanced analytics and conversion tracking
- A/B testing for donation CTAs

---

## Accessibility Requirements
- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (WCAG AA minimum)
- Alt text for all images
- Video captions (when adding dialogue/audio)
- Focus indicators visible
- Skip to main content link

---

## Performance Targets
- Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: <2s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Total Blocking Time: <200ms

---

## Notes for Developer

### Video Optimization
If video file is too large:
```bash
# FFmpeg compression example
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a copy output.mp4
```

### Recommended Libraries
- **Carousel**: `embla-carousel-react` (lightweight, performant)
- **Animations**: `framer-motion` (declarative, powerful)
- **Icons**: `lucide-react` (clean, customizable)
- **Forms**: `react-hook-form` (for newsletter, future donation)

### Testing Checklist
- [ ] Desktop Chrome, Firefox, Safari
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)
- [ ] Tablet landscape/portrait
- [ ] Slow 3G network simulation
- [ ] Video autoplay with sound muted
- [ ] All CTAs clickable and functional
- [ ] Smooth scroll on all browsers
- [ ] Animations don't cause jank

---

## Contact & Support
- Primary contact: [Your email]
- Repository: [GitHub URL TBD]
- Staging URL: [Vercel preview URL]
- Production URL: [TBD]

---

**Budget Estimate**: 6-8 hours for complete MVP with polish  
**Priority**: Speed to launch while maintaining quality and accessibility