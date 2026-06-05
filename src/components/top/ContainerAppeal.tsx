/* =======================================
 * TOPページ 亀の甲温泉の魅力
 * URL: src/components/top/ContainerAppeal.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-04-27
 * Last updated: 2025-04-27
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import styles from '@/styles/components/top/ContainerAppeal.module.scss';

const ContainerAppeal = () => {
  const triggerA = useScrollTrigger<HTMLHeadingElement>();
  const triggerB = useScrollTrigger<HTMLDivElement>();
  const triggerC = useScrollTrigger<HTMLElement>();

  return (
    <section className={styles.containerAppeal}>
      <article className={styles.blockNotice}>
        <div className={styles.innerBlock}>
          <h4>料金改定のお知せ</h4>
          <p>
            平素より亀の甲温泉施設をご利用いただき、誠にありがとうございます。
            <br />
            当施設では、これまでできる限り現行料金（ 300
            円）を維持するための努力を続けて
            まいりました。しかしながら、近年の燃料費·光熱費の高騰に加え、浴場設備の維持
            管理に必要な薬剤・消耗品の価格上昇が続いており、従来の料金体系では安定した
            運営が難しい状況となっております。
            <br />
            <br />
            お客様に安心してご利用いただけるよう、
            <br />
            ・浴槽·脱衣場の衛生管理
            <br />
            ・ボイラー設備の安全点検
            <br />
            ・快適な温度·清潔な湯質の維持
            <br />
            <br />
            つきましては、誠に心苦しい限りではございますが、下記のとおり料金を改定させて
            いただきます。
          </p>
          <dl>
            <div>
              <dt>改定日</dt>
              <dd>
                <p>2026 年7 月1 日より</p>
              </dd>
            </div>
            <div>
              <dt>改定内容</dt>
              <dd>
                <p>
                  <em>
                    大浴場入浴料<span>300 円→ 400 円</span>
                  </em>
                </p>
                <p>※家族湯料金は変更ありません</p>
                <p>
                  <em>
                    11 枚つづりチケット<span>3,000円→ 4,000円</span>
                  </em>
                </p>
              </dd>
            </div>
          </dl>
          <p>
            今回の改定により、お客様にはご負担をおかけすることとなり大変恐縮ではございま
            すが、今後も地域の皆様に安心してご利用いただける温浴施設として、より一層のサ
            ービス向上に努めてまいります。
            <br />
            <br />
            何卒ご理解賜りますようお願い申し上げます。
          </p>
          <span>亀の甲温泉施設</span>
        </div>
      </article>
      <article>
        <h2
          className={`${styles.slideH2} ${triggerA.isVisible ? styles['is-active'] : ''}`}
          ref={triggerA.ref}
        >
          亀の甲温泉の魅力
        </h2>
        <div
          className={`${styles.headText} ${triggerB.isVisible ? styles['is-active'] : ''}`}
          ref={triggerB.ref}
        >
          <h3>七水木温泉郷、美人の湯のひとつ。</h3>
          <p>
            美人の湯として知られる、七水木温泉郷のひとつ。
            <br />
            心地よい温湯は、ナトリウム・炭酸水素塩泉。湯上り後のお肌はツルツルに。
            <br />
            頭痛や冷え性など多くの効能があります。
            <br />
            アットホームな雰囲気な、4つの家族湯と大浴場。
            <br />
            どのお湯からも岡稲荷大明神を望め、心安らぐ風景にのんびりとくつろげます。
          </p>
        </div>
      </article>
      <article
        className={`${styles.blockDetails} ${triggerC.isVisible ? styles['is-active'] : ''}`}
        ref={triggerC.ref}
      >
        <h3>温泉の効能</h3>
        <dl>
          <div>
            <dt>温泉湧出地</dt>
            <dd>菊池市泗水町田島亀甲1773</dd>
          </div>
          <div>
            <dt>泉質</dt>
            <dd>
              ナトリウム−炭酸水素塩泉<span>(中性　低張性　低温水)</span>
            </dd>
          </div>
          <div>
            <dt>泉温</dt>
            <dd>39.2度</dd>
          </div>
          <div>
            <dt>湧出量</dt>
            <dd>毎分67リットル</dd>
          </div>
          <div>
            <dt>適応症</dt>
            <dd>
              <h4>⑴一般適応症</h4>
              <p>
                神経痛、筋肉痛、関節痛、五十肩、運動麻痺、関節のこわばり、うちみ、くじき、慢性消化器病、冷え性、病後回復期、疲労回復、健康増進
              </p>
              <h4>⑵この温泉固有の適応性</h4>
              <p>きりきず、やけど、慢性皮膚病</p>
            </dd>
          </div>
        </dl>
      </article>
    </section>
  );
};

export default ContainerAppeal;
