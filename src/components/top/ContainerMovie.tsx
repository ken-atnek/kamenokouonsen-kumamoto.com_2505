/* =======================================
 * TOPページ動画
 * URL: src/components/top/ContainerMovie.tsx
 * Created: 2025-04-26
 * Last updated: 2025-04-26
 * ======================================= */
'use client';
import styles from '@/styles/components/top/ContainerMovie.module.scss';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const ContainerImage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
        {!videoLoaded && (
          <Image
            src="/videos/noMovie.webp"
            alt="動画が再生できない場合の画像"
            className={styles.fallbackImage}
            fill
          />
        )}
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
      </article>
    </section>
  );
};
export default ContainerImage;
