import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kamenokouonsen-kumamoto.com';
  return [
    { url: `${base}/`,                  lastModified: new Date(), priority: 1.0 },
    { url: `${base}/bath/`,             lastModified: new Date(), priority: 0.8 },
    { url: `${base}/family-bath/`,      lastModified: new Date(), priority: 0.8 },
    { url: `${base}/detail/`,           lastModified: new Date(), priority: 0.8 },
    { url: `${base}/oka-inari-shrine/`, lastModified: new Date(), priority: 0.6 },
  ];
}
