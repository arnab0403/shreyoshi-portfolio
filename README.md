# Shreyoshi — Portfolio Website

A warm, minimal, editorial-style portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#223030` | Dark text, nav, footer bg |
| Accent | `#523D35` | Headings italic, links |
| Muted | `#959D90` | Body text, captions |
| Beige | `#BBA58F` | Accent lines, tags |
| Cream | `#E8D9CD` | Section backgrounds |
| Background | `#EFEFE9` | Page background |

## Typography
- **Headings**: Cormorant Garamond (serif, elegant)
- **Body**: Manrope (clean sans-serif)

## Sections
1. **Hero** — Name, tagline, portrait placeholder, CTA buttons
2. **About** — Personal story, photo, stats
3. **Work** — Essays + Reviews/Editorials (3-column grid with hover cards)
4. **Experience** — Timeline layout (role list + detail panel)
5. **Skills** — Pill tags + Literary Corner links
6. **Contact** — Dark footer with form, QR placeholder, links

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build
npm start
```

## Customising Content

### Replace placeholder photos
Add your images to `/public/images/` and update `src` attributes in:
- `components/Hero.tsx` → portrait photo
- `components/About.tsx` → reading/book photo
- `components/Work.tsx` → essay/project thumbnails

### Update your essays & editorials
Edit the `essays` and `editorials` arrays in `components/Work.tsx`

### Update experience
Edit the `experiences` array in `components/Experience.tsx`

### Update contact links
Edit email, Instagram, blog links in `components/Contact.tsx`

## Deployment

Deploy instantly on [Vercel](https://vercel.com):
```bash
npx vercel
```
