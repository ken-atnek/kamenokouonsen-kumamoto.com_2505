/* =======================================
 * FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-04-25
 * Last updated: 2025-04-26
 * ======================================= */
import styles from '@/styles/components/common/Footer.module.scss';
import Image from 'next/image';
import imageLogo from '@/assets/images/common/logo_20211116150100752.webp';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <article>
        <div className={styles.boxShopInfo}>
          <div className={styles.shopName}>
            <span>泗水 美人の湯</span> 亀の甲温泉
          </div>
          <address>菊池市泗水町田島亀甲1773</address>
          <div className={styles.wrapTime}>
            営業時間
            <time dateTime="T11:00">11:00</time>
            <time dateTime="T22:00">22:00</time>
          </div>
          <a href="tel:0968386510">0968-38-6510</a>
          <p>
            ※大浴場と家族風呂の営業時間は異なります。
            <br />
            事前に各ページをご確認ください。
          </p>
        </div>
        <a
          href="https://qun-kumamoto.com/"
          target="_blank"
          className={styles.linkLogo}
        >
          <Image src={imageLogo} alt="九州運輸" />
        </a>
      </article>
      <div className={styles.copyright}>
        Copyright kamenokouonsen. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
