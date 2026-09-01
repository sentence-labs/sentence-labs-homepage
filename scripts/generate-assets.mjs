import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const mark = 'assets/logo.svg';

const ogSvg = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0A0A08"/>
  <g transform="translate(501, 125) scale(0.3)">
    <rect x="-80" y="-80" width="660" height="590" fill="#0B0B0B"/>
    <g fill="#F4EEE1">
      <rect x="0" y="0" width="292" height="60"/>
      <rect x="0" y="0" width="60" height="108"/>
      <rect x="0" y="108" width="200" height="60"/>
      <rect x="140" y="108" width="60" height="322"/>
      <rect x="0" y="284" width="60" height="146"/>
      <rect x="0" y="356" width="200" height="74"/>
      <rect x="232" y="108" width="60" height="322"/>
      <rect x="232" y="356" width="176" height="74"/>
      <circle cx="451" cy="387" r="26"/>
    </g>
  </g>
  <text x="600" y="420" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="72" fill="#F4EEE1">Sentence Labs</text>
  <text x="600" y="490" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#93907E">An applied research lab building infrastructure</text>
  <text x="600" y="535" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#93907E">for real-time, structured interaction.</text>
</svg>`);

await mkdir('public', { recursive: true });
await sharp(ogSvg).png().toFile('public/og.png');
await sharp(mark, { density: 300 })
  .resize(180, 180, { fit: 'contain', background: '#0A0A08' })
  .png()
  .toFile('public/apple-touch-icon.png');
console.log('wrote public/og.png and public/apple-touch-icon.png');
