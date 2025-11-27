/* =======================================
 * アクセス・料金・営業時間
 * URL: src/app/detail/page.tsx
 * Created: 2025-05-03
 * Last updated: 2025-05-03
 * ======================================= */

import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/detail.module.scss';
import Image01 from '@/assets/images/detail/image01.webp';
import Image02 from '@/assets/images/detail/image02.webp';
import Image from 'next/image';

export default function Detail() {
  return (
    <>
      <PageTitle
        titleJp="アクセス・料金・営業時間"
        titleEn="Access/Price/Opening hours"
      />
      <section className={styles.containerDetail}>
        <h3>ご案内</h3>
        <article>
          <h4>家族風呂</h4>
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
              <dd>1,500円</dd>
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
                <p>6枚セット7,500円</p>
                <p>9,000円を7,500円で販売。1,500円お得です‼</p>
              </dd>
            </div>
            <div>
              <dt>予約</dt>
              <dd>先着順となります。ご了承くださいませ。</dd>
            </div>
          </dl>
        </article>
        <article>
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
                  <span>大人（中学生以上）：300円</span>
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
              <dd>11枚綴り3,000円</dd>
            </div>
          </dl>
        </article>
        <article>
          <h4>入浴グッズ販売</h4>
          <ul>
            <li>シャンプー</li>
            <li>リンス</li>
            <li>ボディーソープ</li>
            <li>タオル</li>
            <li>カミソリ</li>
            <li>歯ブラシ</li>
          </ul>
        </article>
        <article>
          <h4>貸し切り部屋</h4>
          <dl>
            <div>
              <dt>貸切時間</dt>
              <dd>11:00〜17:00</dd>
            </div>
            <div>
              <dt>料金(約16畳)</dt>
              <dd>2,000円</dd>
            </div>
            <div>
              <dt>料金(約32畳)</dt>
              <dd>4,000円</dd>
            </div>
          </dl>
        </article>
        <div className={styles.boxImage}>
          <Image src={Image01} alt="大広間" />
        </div>
        <article>
          <h4>駐車場</h4>
          <dl>
            <div>
              <dt>台数</dt>
              <dd>40台</dd>
            </div>
          </dl>
        </article>
        <div className={styles.boxImage}>
          <Image src={Image02} alt="駐車場" />
        </div>
      </section>
      <section className={styles.containerMap}>
        <h3>アクセス</h3>
        <article>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.944553533997!2d130.74324137566947!3d32.93852477359653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540fb977a2f7307%3A0x5d4827fcef377677!2z5LqA44Gu55Sy5rip5rOJ!5e0!3m2!1sja!2sjp!4v1746260559083!5m2!1sja!2sjp"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
      </section>
    </>
  );
}
