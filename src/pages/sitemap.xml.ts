import type { APIRoute } from 'astro';
import { navigation } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', ...navigation.map(item => item.href), '/news/', '/people/abdellah-fourtassi/'];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(path, site)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
