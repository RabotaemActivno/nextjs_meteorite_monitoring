import styles from "./Item.module.css";
import Image from "next/image";

export default function Item() {
  return (
    <div className={styles.item}>
      <h1>12 сент 2023</h1>
      <div className={styles.info}>
        <div className={styles.range}>
          <span>5 642 837 км</span>
          <Image
            src="/arrow.png"
            alt="Описание изображения"
            width={96}
            height={6}
          />
        </div>
        <Image
          src="/met.png"
          alt="Описание изображения"
          width={36}
          height={40}
        />
        <div>
          <div className={styles.yearStyle}>2021 FQ</div>
          <div>Ø 85 м</div>
        </div>
      </div>
      <div className={styles.footer}>
        <button>ЗАКАЗАТЬ</button>
        <div>⚠ Опасен</div>
      </div>
    </div>
  );
}
