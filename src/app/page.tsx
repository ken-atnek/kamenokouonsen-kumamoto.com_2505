/* =======================================
 * TOPページ
 * URL: /app/page.tsx
 * Created: 2025-04-25
 * Last updated: 2025-04-26
 * ======================================= */

import ContainerAppeal from '@/components/top/ContainerAppeal';
import ContainerBathArea from '@/components/top/ContainerBathArea';
import ContainerMovie from '@/components/top/ContainerMovie';
import ContainerOkainari from '@/components/top/ContainerOkainari';
import ContainerSlide from '@/components/top/ContainerSlide';

export default function Home() {
  return (
    <main>
      <ContainerMovie />
      <ContainerAppeal />
      <ContainerBathArea />
      <ContainerOkainari />
      <ContainerSlide />
    </main>
  );
}
