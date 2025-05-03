/* =======================================
 * HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-23
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import imageLogo from '@/assets/images/common/kamenokouonsen_logo.webp';
import Link from 'next/link';
const Header = () => {
  const { ref, isVisible } = useScrollTrigger();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  // メニューが開いている間はスクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 外側をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById('mobileMenu')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className={styles.containerHeader}>
      <h1>
        <Image src={imageLogo} alt="亀の甲温泉" />
      </h1>
      <article
        id="mobileMenu"
        className={`${isOpen ? styles['is-open'] : ''} ${
          !isOpen ? styles.closing : ''
        }`}
      >
        <nav>
          <Link href="/" className={styles.itemLink} onClick={closeMenu}>
            TOP
          </Link>
          <Link
            href="/family-bath/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            家族湯
          </Link>
          <Link href="/bath/" className={styles.itemLink} onClick={closeMenu}>
            大浴場
          </Link>
          <Link href="/detail/" className={styles.itemLink} onClick={closeMenu}>
            アクセス・料金・営業時間
          </Link>
          <Link
            href="/oka-inari-shrine/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            岡稲荷神社
          </Link>
          <Link href="#" className={styles.itemLink} onClick={closeMenu}>
            採用情報
          </Link>
        </nav>
        <div className={styles.boxWorkInfo}>
          <a href="tel:0968386510">0968-38-6510</a>
          <div className={styles.wrapTime}>
            営業時間
            <time dateTime="T11:00">11:00</time>
            <time dateTime="T22:00">22:00</time>
          </div>
        </div>
      </article>
      <button
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
