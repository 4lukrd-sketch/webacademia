// Lee entradas de WordPress (REST API) en tiempo de build con timeout resiliente.
const API = 'https://www.isfes.es/wp-json/wp/v2';
const FIELDS = '_fields=id,date,link,title,excerpt,featured_media,uagb_featured_image_src,_embedded';
export type Entry = { title: string; link: string; date: string; excerpt: string; image?: string; alt?: string };

export const CAT_BLOG = 'actualidad-oposiciones';
export const CAT_CONVOCATORIAS = 'convocatorias-policia-local';

const decode = (s: string) =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
   .replace(/&hellip;/g, '…').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
const clean = (h: string) => decode(h.replace(/<[^>]+>/g, '')).replace(/\s*\[…\]\s*$/, '…').trim();
const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const fecha = (iso: string) => { const d = new Date(iso); return `${d.getDate()} ${MESES[d.getMonth()]}, ${d.getFullYear()}`; };

async function byCategory(slug: string, n: number): Promise<Entry[]> {
  try {
    const catRes = await fetch(`${API}/categories?slug=${slug}&_fields=id`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!catRes.ok) return [];
    const cats = await catRes.json();
    if (!cats[0]) { console.warn(`[wp] categoría "${slug}" no encontrada`); return []; }

    const r = await fetch(`${API}/posts?per_page=${n}&categories=${cats[0].id}&_embed=wp:featuredmedia&${FIELDS}`, {
      signal: AbortSignal.timeout(6000),
    });
    if (!r.ok) return [];
    return (await r.json()).map((p: any) => {
      const m = p._embedded?.['wp:featuredmedia']?.[0];
      const image = m?.media_details?.sizes?.large?.source_url ?? m?.source_url
                 ?? p.uagb_featured_image_src?.large?.[0] ?? p.uagb_featured_image_src?.full?.[0];
      return { title: clean(p.title.rendered), link: p.link, date: fecha(p.date),
               excerpt: clean(p.excerpt.rendered), image, alt: m?.alt_text };
    });
  } catch (e) {
    console.warn(`[wp] Aviso: no se pudieron obtener posts para "${slug}". Se continúa con lista vacía.`, e);
    return [];
  }
}

export const latestPosts = () => byCategory(CAT_BLOG, 8);
export const convocatorias = () => byCategory(CAT_CONVOCATORIAS, 6);