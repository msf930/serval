import Image from "next/image";
import styles from "./style.module.scss";

const Card = ({
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
      <div className={styles.num}></div>
      <div
        style={{
          backgroundColor: color,

          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>

            <span>
              <a href={url} target="_blank">
                Visit Site
              </a>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.inner}>
              <Image fill src={`/images/${src}`} alt="image" priority />
            </div>
          </div>
        </div>
      </div>
      <h3 className={styles.num}>
        {i + 1} / {total}
      </h3>
    </div>
  );
};

export default Card;
