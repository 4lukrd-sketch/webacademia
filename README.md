# academia.isfes.es (Astro)
npm install && npm run dev   # desarrollo
npm run build                # genera /dist (estático)
Las entradas del blog y convocatorias se leen de https://www.isfes.es/wp-json/wp/v2 en cada build.
Para mantenerlas al día: reconstruye al publicar (webhook de WordPress -> Netlify/Vercel/Cloudflare build hook) o con un cron diario.
