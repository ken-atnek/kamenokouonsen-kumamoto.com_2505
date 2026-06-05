/* =======================================
 * 亀の甲温泉 Layout
 * URL: music-fes/
 * Created: 2025-04-25
 * Last updated: 2025-04-25
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE ||
        'https://kamenokouonsen-kumamoto.com/'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      title: ' 亀の甲温泉 | 七水木温泉郷 岡稲荷大明神を望む 美人の湯。',
      description:
        '熊本県の菊池市泗水町の泗水温泉、亀の甲温泉です。源泉かけ流しで美人の湯として知られるナトリウム・炭酸水素塩泉で湯上がり後はお肌がツルツルになります。頭痛や冷え性など、多くの効能があります。家族湯もありバリアフリーに対応したお風呂もあります。',
      url: metadataBase?.toString(),
      type: 'website',
      locale: 'ja_JP',
      siteName: '亀の甲温泉',
      images: [
        {
          url: './images/ogp.jpg',
          width: 1200,
          height: 630,
          alt: '亀の甲温泉のOGP画像',
        },
      ],
    },
  }),
  title: ' 亀の甲温泉 | 七水木温泉郷 岡稲荷大明神を望む 美人の湯。',
  description: isRealProduction
    ? '熊本県の菊池市泗水町の泗水温泉、亀の甲温泉です。源泉かけ流しで美人の湯として知られるナトリウム・炭酸水素塩泉で湯上がり後はお肌がツルツルになります。頭痛や冷え性など、多くの効能があります。家族湯もありバリアフリーに対応したお風呂もあります。。'
    : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: [
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="robots"
          content={isRealProduction ? 'index, follow' : 'noindex, nofollow'}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: '亀の甲温泉',
              url: 'https://kamenokouonsen-kumamoto.com/',
              address: {
                '@type': 'PostalAddress',
                addressLocality: '菊池市泗水町',
                addressRegion: '熊本県',
                addressCountry: 'JP',
              },
              openingHours: ['We-Mo 11:00-22:00'],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
