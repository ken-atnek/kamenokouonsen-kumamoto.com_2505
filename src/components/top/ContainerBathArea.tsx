/* =======================================
 * TOPページ 浴室紹介
 * URL: src/components/top/ContainerBathArea.tsx
 * Created: 2025-05-02
 * Last updated: 2025-05-02
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import styles from '@/styles/components/top/ContainerBathArea.module.scss';
import Image from 'next/image';

import bath01 from '@/assets/images/components/top/bath01.webp';
import bath02 from '@/assets/images/components/top/bath02.webp';
import bath03 from '@/assets/images/components/top/bath03.webp';
import Link from 'next/link';
const ContainerBathArea = () => {
  const triggerA = useScrollTrigger<HTMLElement>();
  const triggerB = useScrollTrigger<HTMLElement>();
  return (
    <section className={styles.containerBathArea}>
      <article
        className={`${triggerA.isVisible ? styles['is-active'] : ''}`}
        ref={triggerA.ref}
      >
        <h2>大浴場</h2>
        <ul>
          <li>
            <Image src={bath01} alt="大浴場画像01" />
          </li>
          <li>
            <Image src={bath02} alt="大浴場画像02" />
          </li>
        </ul>
        <Link href="/bath/" className={styles.btnLink}>
          詳しく見る
        </Link>
      </article>
      <article
        className={`${triggerB.isVisible ? styles['is-active'] : ''}`}
        ref={triggerB.ref}
      >
        <h2>家族湯</h2>
        <div>
          <Image src={bath03} alt="大浴場画像03" />
        </div>
        <Link href="/family-bath/" className={styles.btnLink}>
          詳しく見る
        </Link>
      </article>
    </section>
  );
};
export default ContainerBathArea;
