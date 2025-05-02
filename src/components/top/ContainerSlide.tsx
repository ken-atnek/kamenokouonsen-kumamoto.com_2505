/* =======================================
 * TOPページ スライド
 * URL: src/components/top/ContainerSlide.tsx
 * Created: 2025-05-02
 * Last updated: 2025-05-02
 * ======================================= */
'use client';

import styles from '@/styles/components/top/ContainerSlide.module.scss';
import Image from 'next/image';

import slide01 from '@/assets/images/components/top/slide/slide01.webp';
import slide02 from '@/assets/images/components/top/slide/slide02.webp';
import slide03 from '@/assets/images/components/top/slide/slide03.webp';
import slide04 from '@/assets/images/components/top/slide/slide04.webp';
import slide05 from '@/assets/images/components/top/slide/slide05.webp';
import slide06 from '@/assets/images/components/top/slide/slide06.webp';
import slide07 from '@/assets/images/components/top/slide/slide07.webp';
import slide08 from '@/assets/images/components/top/slide/slide08.webp';

const ContainerOkainari = () => {
  const images = [
    slide01,
    slide02,
    slide03,
    slide04,
    slide05,
    slide06,
    slide07,
    slide08,
    slide01,
    slide02,
    slide03,
    slide04,
    slide05,
    slide06,
    slide07,
    slide08,
  ];
  return (
    <section className={styles.containerSlide}>
      <div className={styles.sliderTrack}>
        {images.map((img, i) => (
          <div className={styles.slide} key={i}>
            <Image src={img} alt={`スライド画像${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default ContainerOkainari;
