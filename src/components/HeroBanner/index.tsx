import { ReactNode } from "react";
import styles from "./HeroBanner.module.css";

type HeroBannerProps = {
  backgroundImage?: string;
  mainImage?: string;
  children?: ReactNode;
};

function HeroBanner({ backgroundImage, mainImage, children }: HeroBannerProps) {
  const backgroundImg = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};
  return (
    <section className={styles.heroBanner}>
      <div className={styles.gridOverlay} style={backgroundImg}></div>
      <div className={styles.heroContent}>
        {mainImage && (
          <div className={styles.mainImageWrapper}>
            <img
              src={mainImage}
              alt="Hora de abraçar seu lado geek!"
              className={styles.mainImage}
            />
          </div>
        )}

        {children && <div className={styles.textContent}>{children}</div>}
      </div>
    </section>
  );
}

export default HeroBanner;
