import styles from "./Basket.module.css";

export default function Basket() {
  return (
    <div className={styles.basket}>
      <div className={styles.basket_main}>
        <h3>Корзина</h3>
        <p>2 астеройда</p>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.button}>Оправить</button>
      </div>
    </div>
  );
}
