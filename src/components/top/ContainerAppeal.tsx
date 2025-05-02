/* =======================================
 * TOPページ 亀の甲温泉の魅力
 * URL: src/components/top/ContainerAppeal.tsx
 * Created: 2025-04-27
 * Last updated: 2025-04-27
 * ======================================= */

import styles from '@/styles/components/top/ContainerAppeal.module.scss';

const ContainerAppeal = () => {
  return (
    <section className={styles.containerAppeal}>
      <article>
        <h2>亀の甲温泉の魅力</h2>
        <div className={styles.headText}>
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
      <article className={styles.blockDetails}>
        <h3>温泉の効能</h3>
        <dl>
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
