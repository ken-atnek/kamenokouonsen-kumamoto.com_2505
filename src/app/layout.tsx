/* =======================================
 * 亀の甲温泉 Layout
 * URL: music-fes/
 * Created: 2025-04-25
 * Last updated: 2025-04-25
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Noto_Sans_JP } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

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
    <html lang="jp" className={`${notoSans.className} ${roboto.className}`}>
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
