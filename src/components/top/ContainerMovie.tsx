/* =======================================
 * TOPページ動画
 * URL: src/components/top/ContainerMovie.tsx
 * Created: 2025-04-26
 * Last updated: 2025-04-26
 * ======================================= */
'use client';
import styles from '@/styles/components/top/ContainerMovie.module.scss';
import HeadImage from '@/assets/images/components/top/head-mobile.webp';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const ContainerImage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // スマホ判定（例: 768px 以下をスマホと見なす）
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // 初期チェック
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    const handleCanPlay = () => setVideoLoaded(true);

    if (videoElement) {
      if (videoElement.readyState >= 3) {
        setVideoLoaded(true);
      }
      videoElement.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  return (
    <section className={styles.containerImage}>
      <article>
        <div className={styles.wrapText}>
          <p>
            七水木温泉郷
            <br />
            岡稲荷大明神を望む
            <br />
            美人の湯。
          </p>
        </div>
        {/* モバイル or 動画未読み込み時は画像 */}
        {(isMobile || !videoLoaded) && (
          <div className={styles.fallbackWrapper}>
            <Image
              src={'/videos/head-mobile.webp'}
              alt="動画が再生できない場合の画像"
              className={styles.fallbackImage}
              fill
              priority
            />
          </div>
        )}

        {/* モバイルでなければ動画を再生 */}
        {!isMobile && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.boxMovie}
            ref={videoRef}
          >
            <source src="/videos/topMovie.webm" type="video/webm" />
            <source src="/videos/topMovie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </article>
    </section>
  );
};
export default ContainerImage;
