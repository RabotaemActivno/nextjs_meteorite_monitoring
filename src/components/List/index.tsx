"use client";
import { useState, useEffect } from "react";
import styles from "./List.module.css";
import Item from "../Item";
import Link from "next/link";

type Props = {
  nearEarthObjects: any;
};

console.log("ochko");
export default function List({ nearEarthObjects }: Props) {
  console.log(nearEarthObjects);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (nearEarthObjects) {
      setData(nearEarthObjects);
    }
  }, [nearEarthObjects]);
  console.log();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>
          Ближайшие подлёты
          <br />
          астероидов
        </h3>
        <div className={styles.selector}>
          <p className={styles.active}>в километрах</p> |{" "}
          <p> в лунных орбитах</p>
        </div>
      </div>
      <div className={styles.list}>
        {data &&
          data.map((it: any) => (
            <Link href={`/${it.id}`} key={it.id} className={styles.link}>
              <Item info={it} />
            </Link>
          ))}
      </div>
    </div>
  );
}
