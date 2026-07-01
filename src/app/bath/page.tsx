/* =======================================
 * 大浴場
 * URL: src/app/bath/page.tsx
 * Created: 2025-05-03
 * Last updated: 2025-05-03
 * ======================================= */

import type { Metadata } from 'next';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/bath.module.scss';

export const metadata: Metadata = {
  title: '大浴場 | 亀の甲温泉',
  description:
    '源泉かけ流し・美人の湯。広々とした内湯と露天風呂で、ゆっくり疲れを癒してください。熊本県菊池市泗水町の亀の甲温泉です。',
  alternates: { canonical: 'https://kamenokouonsen-kumamoto.com/bath/' },
};
import Interior01 from '@/assets/images/bath/interior01.webp';
import Interior02 from '@/assets/images/bath/interior02.webp';
import Image from 'next/image';

export default function Bath() {
  return (
    <>
      <PageTitle titleJp="大浴場" titleEn="Bath" />
      <section className={styles.containerBath}>
        <div className={styles.boxImage}>
          <Image src={Interior01} alt="大浴場・露天" />
        </div>
        <article>
          <h3>大浴場・露天</h3>
          <p>
            ”美人の湯”として知られるナトリウム・炭酸水素塩泉で、源泉かけ流しのお風呂です。
            <br />
            広々とした大浴場でゆっくり疲れを癒してください。
          </p>
          <h4>大浴場</h4>
          <dl>
            <div>
              <dt>営業時間</dt>
              <dd>
                <div>11：00～22：00</div>
                <div>湯上り時間 21:50</div>
              </dd>
            </div>
            <div>
              <dt>料金(1人)</dt>
              <dd>
                <div>
                  <span>大人（中学生以上）：400円</span>
                  <span>子ども（小学生）：100円</span>
                  <span>幼児：無料</span>
                </div>
              </dd>
            </div>

            <div>
              <dt>内湯・露天風呂</dt>
              <dd>有</dd>
            </div>
            <div>
              <dt>休業日</dt>
              <dd>毎週火曜日</dd>
            </div>
            <div>
              <dt>回数券</dt>
              <dd>11枚綴り4,000円</dd>
            </div>
          </dl>
        </article>
        <div className={styles.boxImage}>
          <Image src={Interior02} alt="大浴場・内観" />
        </div>
      </section>
    </>
  );
}
