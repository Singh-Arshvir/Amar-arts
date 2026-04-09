import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import https from 'https'
import path from 'path'

const images = [
  { url: 'https://image.pollinations.ai/prompt/high-quality-cinematic-product-photography-shot-of-neatly-folded-premium-custom-printed-t-shirts-next-to-a-personalized-photo-coffee-mug-chic-modern-print-studio?width=800&height=600&nologo=true', name: 'tshirts_gifts.jpg' },
  { url: 'https://image.pollinations.ai/prompt/macro-high-angle-elegant-lifestyle-shot-of-beautifully-crafted-luxury-Indian-wedding-invitation-cards-golden-foil-crimson-navy-blue-silk-background?width=800&height=600&nologo=true', name: 'wedding_cards.jpg' },
  { url: 'https://image.pollinations.ai/prompt/modern-dynamic-shot-of-large-format-industrial-printer-producing-vibrant-business-flex-banner-rolls-of-vinyl-stack-of-visiting-cards?width=800&height=600&nologo=true', name: 'flex_banners.jpg' }
];

images.forEach(img => {
  const filepath = path.resolve('public/images', img.name);
  if (!fs.existsSync(filepath)) {
    https.get(img.url, (res) => {
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
    });
  }
});

export default defineConfig({
  plugins: [react()],
})
