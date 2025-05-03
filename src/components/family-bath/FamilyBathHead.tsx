/* =======================================
 * 家族湯 ヘッド部分
 * URL: src/components/family-bath/FamilyBathHead.tsx
 * Referenced in: src/app/family-bath/page.tsx
 * Created: 2025-04-25
 * Last updated: 2025-04-26
 * ======================================= */

import styles from '@/styles/components/family-bath/FamilyBathHead.module.scss';
import Image from 'next/image';
import HeadImage from '@/assets/images/components/family-bath/head-image.webp';
import HeadImage02 from '@/assets/images/components/family-bath//head-image02.webp';
import bath01 from '@/assets/images/components/family-bath/bath01.webp';
import bath02 from '@/assets/images/components/family-bath/bath02.webp';
import bath03 from '@/assets/images/components/family-bath/bath03.webp';
import bath04 from '@/assets/images/components/family-bath/bath04.webp';
import bath05 from '@/assets/images/components/family-bath/bath05.webp';
import bath06 from '@/assets/images/components/family-bath/bath06.webp';

const FamilyBathHead = () => {
  return (
    <section className={styles.familyBathHead}>
      <div className={styles.boxHeadImage}>
        <Image src={HeadImage} alt="亀の甲温泉の家族風呂" />
      </div>
      <article>
        <h3>家族風呂</h3>
        <p>
          「さくら」「どんぐり」「えのき」「椎の木」の４部屋の家族湯をご用意。どの部屋からも岡稲荷大明神を望むことができ、複数人でのご利用に最適です。
          <br />
          <br />
          「さくら」はバリアフリー仕様のお風呂。老若男女、お身体が不自由な方まで皆さんがくつろぎながら、心身ともに癒されるお部屋となっております。
        </p>
        <div className={styles.photoList}>
          <figure>
            <Image src={bath01} alt="どんぐり" />
            <figcaption>「どんぐり」</figcaption>
          </figure>
          <figure>
            <Image src={bath02} alt="えのき" />
            <figcaption>「えのき」</figcaption>
          </figure>
          <figure>
            <Image src={bath03} alt="椎の木" />
            <figcaption>「椎の木」</figcaption>
          </figure>
        </div>
      </article>
      <div className={styles.boxHeadImage}>
        <Image src={HeadImage02} alt="亀の甲温泉の家族風呂" />
      </div>
      <article>
        <h3>「さくら」（バリアフリー）</h3>
        <div className={styles.photoList}>
          <figure>
            <Image src={bath04} alt="どんぐり" />
          </figure>
          <figure>
            <Image src={bath05} alt="えのき" />
          </figure>
          <figure>
            <Image src={bath06} alt="椎の木" />
          </figure>
        </div>
      </article>
    </section>
  );
};
export default FamilyBathHead;
