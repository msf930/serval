import Image from "next/image";
import styles from "./style.module.scss";

const CardMobile = ({
  i,
  title,
  src,
  url,
  description,
  color,

  range,
  targetScale,
  total,
}) => {
  const j = i + 1;

  return (
    <div className={styles.cardContainer}>
      <div
        style={{
          backgroundColor: color,
        }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.imageContainer}>
            <div className={styles.inner}>
              <Image fill src={`/images/${src}`} alt="image" />
            </div>
          </div>
          <div className={styles.description}>
            <p>{description}</p>

            <span>
              <a href={url} target="_blank">
                Visit Site
              </a>
            </span>
          </div>
        </div>
      </div>
      <h3 className={styles.num}>
        {i + 1} / {total}
      </h3>
    </div>
  );
};

export default CardMobile;
