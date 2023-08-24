import styles from "./TheHeader.module.css";

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ARMAGEDDON 2023</h1>
      <p className={styles.subtitle}>ООО “Команда им. Б. Уиллиса”.<br/>Взрываем астероиды с 1998 года.</p>
    </header>
  );
}
