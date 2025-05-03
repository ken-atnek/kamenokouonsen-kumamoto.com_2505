/* =======================================
 * 家族湯 詳細
 * URL: src/components/family-bath/FamilyBathDetails.tsx
 * Referenced in: src/app/family-bath/page.tsx
 * Created: 2025-05-03
 * Last updated: 2025-05-03
 * ======================================= */

import styles from '@/styles/components/family-bath/FamilyBathDetails.module.scss';

const FamilyBathDetails = () => {
  return (
    <section className={styles.familyBathDetails}>
      <article>
        <h3>家族風呂</h3>
        <dl>
          <div>
            <dt>営業時間</dt>
            <dd>
              <div>
                13：00～22：00<span>（受付21：00まで）</span>
              </div>
            </dd>
          </div>
          <div>
            <dt>入浴時間</dt>
            <dd>
              <ul>
                <li>
                  <span>月・水・木・金</span>
                  <span>60分</span>
                </li>
                <li>
                  <span>土・日・祝</span>
                  <span>50分</span>
                </li>
              </ul>
            </dd>
          </div>
          <div>
            <dt>料金(1室)</dt>
            <dd>1,200円</dd>
          </div>
          <div>
            <dt>バリアフリー 浴槽</dt>
            <dd>有</dd>
          </div>
          <div>
            <dt>備品</dt>
            <dd>
              ドライヤー、備え付けのボディーソープ・リンスインシャンプー有り
            </dd>
          </div>
          <div>
            <dt>休業日</dt>
            <dd>毎週火曜日</dd>
          </div>
          <div>
            <dt>回数券</dt>
            <dd>
              <p>6枚セット6,500円</p>
              <p>7,200円を6,500円で販売。700円お得です‼</p>
            </dd>
          </div>
          <div>
            <dt>予約</dt>
            <dd>先着順となります。ご了承くださいませ。</dd>
          </div>
        </dl>
      </article>
    </section>
  );
};
export default FamilyBathDetails;
