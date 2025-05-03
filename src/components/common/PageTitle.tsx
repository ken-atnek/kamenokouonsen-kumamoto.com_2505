/* =======================================
 * ページタイトル
 * URL: src/components/common/PageTitle.tsx
 * Created: 2025-05-03
 * Last updated: 2025-05-03
 * ======================================= */

import styles from '@/styles/components/common/PageTitle.module.scss';

type PageTitleProps = {
  titleJp: string;
  titleEn: string;
};

const PageTitle = ({ titleJp, titleEn }: PageTitleProps) => {
  return (
    <section className={styles.containerPageTitle}>
      <article>
        <div>
          <h2>{titleJp}</h2>
          <span>{titleEn}</span>
        </div>
      </article>
    </section>
  );
};
export default PageTitle;
