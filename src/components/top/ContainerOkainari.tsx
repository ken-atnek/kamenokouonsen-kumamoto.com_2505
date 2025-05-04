/* =======================================
 * TOPページ 岡稲荷大明神
 * URL: src/components/top/ContainerOkainari.tsx
 * Created: 2025-05-02
 * Last updated: 2025-05-02
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import styles from '@/styles/components/top/ContainerOkainari.module.scss';
import Image from 'next/image';

import okainari from '@/assets/images/components/top/torii.webp';
import yakiimo from '@/assets/images/components/top/yakiimo.webp';
import Link from 'next/link';
const ContainerOkainari = () => {
  const triggerA = useScrollTrigger<HTMLDivElement>();
  const triggerB = useScrollTrigger<HTMLDivElement>();
  const triggerC = useScrollTrigger<HTMLDivElement>();
  return (
    <section className={styles.containerOkainari}>
      <article>
        <div
          className={`${styles.boxImage} ${triggerA.isVisible ? styles['is-active'] : ''}`}
          ref={triggerA.ref}
        >
          <Image
            src={okainari}
            alt="岡稲荷大明神"
            fill
            className={styles.itemImage}
          />
        </div>
        <div
          className={`${styles.wrapText} ${triggerB.isVisible ? styles['is-active'] : ''}`}
          ref={triggerB.ref}
        >
          <h2>岡稲荷大明神</h2>
          <h3>地域を守り続けて500年 岡稲荷大明神</h3>
          <p>
            菊池台地(花房台地)西端の小高い丘陵である岡山中腹にある。
            <br />
            祭神は倉稲魂命で、狐に乗った木造を神体とし、祭神は一般には「岡のモクジャどん」と親しまれ民衆救済の神とされている。
            <br />
            社殿のある岡山は「岡の森」とよばれ、樫の自然林で覆われ、近年の研究では、もとは森を信仰対象としていたものを、戦国時代に田島を支配した田嶋氏が先祖ゆかりの地に社殿を建てたことから祭神と田嶋氏が混合し「おかんもくじゃ伝説」が生じたとされている。
          </p>
          <Link href="/oka-inari-shrine/" className={styles.btnLink}>
            詳しく見る
          </Link>
        </div>

        <div
          className={`${styles.blockYakiimo} ${triggerC.isVisible ? styles['is-active'] : ''}`}
          ref={triggerC.ref}
        >
          <div className={styles.boxImageBottom}>
            <Image
              src={yakiimo}
              alt="亀の甲温泉名物”焼き芋”"
              className={styles.itemImage}
            />
          </div>
          <div className={styles.boxText}>
            <h3>あつあつ。ほくほく。</h3>
            <p>
              亀の甲温泉名物”焼き芋”
              <br />
              泗水の大地で育った美味しい焼き芋を、ひとつひとつ美味しく蒸かしてご用意しております。少し寒くなるとさらに美味しさを増すサツマイモ。温泉と一緒に是非ご賞味ください。
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default ContainerOkainari;
