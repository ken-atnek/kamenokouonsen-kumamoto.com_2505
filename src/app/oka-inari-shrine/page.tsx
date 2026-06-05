/* =======================================
 * 岡稲荷大明神
 * URL: src/app/oka-inari-shrine/page.tsx
 * Created: 2025-05-03
 * Last updated: 2025-05-03
 * ======================================= */

import type { Metadata } from 'next';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/oka-inari-shrine.module.scss';

export const metadata: Metadata = {
  title: '岡稲荷大明神 | 亀の甲温泉',
  description:
    '地域を守り続けて500年、岡稲荷大明神。亀の甲温泉から望む菊池台地の小高い丘陵に鎮座する神社です。',
  alternates: {
    canonical: 'https://kamenokouonsen-kumamoto.com/oka-inari-shrine/',
  },
};
import Image01 from '@/assets/images/oka-inari-shrine/image01.webp';
import Image02 from '@/assets/images/oka-inari-shrine/image02.webp';
import Image03 from '@/assets/images/oka-inari-shrine/image03.webp';
import Image from 'next/image';

export default function OkaInariShrine() {
  return (
    <>
      <PageTitle titleJp="岡稲荷大明神" titleEn="Oka Inari Shrine" />
      <section className={styles.containerOkaInari}>
        <article className={styles.blockHead}>
          <div className={styles.boxImage}>
            <Image
              src={Image01}
              alt="岡稲荷大明神"
              fill
              className={styles.itemImage}
            />
          </div>
          <h3>地域を守り続けて500年 岡稲荷大明神</h3>
          <p>
            菊池台地(花房台地)西端の小高い丘陵である岡山中腹にある。
            <br />
            祭神は倉稲魂命で、狐に乗った木造を神体とし、祭神は一般には「岡のモクジャどん」と親しまれ民衆救済の神とされている。
            <br />
            社殿のある岡山は「岡の森」とよばれ、樫の自然林で覆われ、近年の研究では、もとは森を信仰対象としていたものを、戦国時代に田島を支配した田嶋氏が先祖ゆかりの地に社殿を建てたことから祭神と田嶋氏が混合し「おかんもくじゃ伝説」が生じたとされている。
          </p>
        </article>
        <article className={styles.blockBottom}>
          <div className={styles.boxImage}>
            <Image
              src={Image02}
              alt="岡稲荷大明神"
              fill
              className={styles.itemImage}
            />
          </div>
          <h3>縁起</h3>
          <p>
            後柏原院の御世の頃、田島村の雅人治部という者の夢枕に白髪の老翁が忽然と立ち、そして言うことは
            「そもそも岡原は蘇山の裾野で神代から雪白旋毛三尾の天狐が棲みついてきた。
            <br />
            汝も岡山の陽麓に来て信を篤くとるなら福徳自在子孫繁栄して往年1つの村里となるべし。
            <br />
            必ず疑うことなかれ」 といって霊夢から覚めた。
            <br />
            <br />
            治部は不思議に思ったが信心肺腑に銘じてこれは正しく神狐杢左衛門のお告げと悟り、ただちに山城国の森藤稲荷神社に馳せ参じ、正一位の祭りを請い永正5年4月10日霊夢の瑞祥に従って、稲荷神社の勧請を行った。
          </p>
          <div className={styles.boxText}>
            <div className={styles.wrapImage}>
              <Image
                src={Image03}
                alt="岡稲荷大明神"
                className={styles.itemImage}
              />
            </div>
            <p>
              この数百年後、治部の子孫繁栄してついに1村27軒の竈をならべ、疫病が流行っても凶邪に犯される者もなく、火災や盗難の憂いが起きようとすると夜半に誰ともなく鉦を鳴らし、石を叩いて不慮の警告があるので小屋の庇にいたるまで、昔から火災を聞かない。
              <br />
              <br />
              不思議な出来事をあげれば枚挙にいとまがない。
              <br />
              それで岡稲荷大明神を厚く尊信する人は、貴となく貧となく火災や盗難を免れて、息災延命福徳自在で願うことひとつとして成就しないことはない。
              <br />
              子孫繁昌して奇瑞が新たなことは治部霊とおなじである。
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
