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
          <h4>温泉営業に関するお知らせ</h4>
          <p>
            平素より当館の温泉をご利用いただき、誠にありがとうございます。
            <br />
            現在、燃料価格の高騰に伴い、当面の間、温泉施設の営業を一部縮小して運営しております。
            <br />
            <br />
            営業内容は以下の通りです。 <br />
            ・大浴場の露天風呂（男女）を閉鎖
            <br />
            ・家族湯は月・水・木・金の間、2棟を閉鎖 <br />
            ・土曜・日曜は4棟すべて営業
            <br />
            <br />
            なお、全館での通常運営再開時期につきましては、
            <br className="sp" />
            現在のところ未定となっております。
            <br />
            <br />
            ご利用のお客様にはご不便をおかけいたしますが、
            <br className="sp" />
            何卒ご理解賜りますようお願い申し上げます。
          </p>
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
