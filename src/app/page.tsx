import Basket from "@/components/Basket";
import styles from "./page.module.css";
import List from "@/components/List";

export default function Home() {
  return (
    <div>
      <div className={styles.flex_wrapper}>
        <List/>
        <Basket />
      </div>
    </div>
  );
}
