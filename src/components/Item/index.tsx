"use client";
import { useEffect, useState } from "react";
import styles from "./Item.module.css";
import Image from "next/image";

export default function Item({ info }: any) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    if (info) {
      setData(info);
    }
  }, [info]);
  console.log();

//   if (!data) {
//     return null;
//   }

  const closeApproachDate = data.close_approach_data[0].close_approach_date_full.split(' ')[0].replace(/-/g, " ")

  const missDistance = data.close_approach_data[0].miss_distance.kilometers
  const formattedNumber = new Intl.NumberFormat('en-US').format(Math.round(missDistance)).replace(/,/g, ' ');
  const formattedName = data.name.replace(/\(|\)/g, '')
  const diameter = Math.round(data.estimated_diameter.meters.estimated_diameter_max - data.estimated_diameter.meters.estimated_diameter_min)

  const metSize = () => {
    return diameter > 100 ? 40 : 30;
  };
  
  const value = metSize();

  return (
    <div className={styles.item}>
      <h1>{closeApproachDate}</h1>
      <div className={styles.info}>
        <div className={styles.range}>
          <span>{formattedNumber} км</span>
          <Image
            src="/arrow.png"
            alt="Описание изображения"
            layout="responsive" 
            width={96} 
            height={6} 
          />
        </div>
        <Image
          src="/met.png"
          alt="Описание изображения"
          width={value}
          height={value}
        />
        <div>
          <div className={styles.yearStyle}>{formattedName}</div>
          <div>Ø {diameter} м</div>
        </div>
      </div>
      <div className={styles.footer}>
        <button>ЗАКАЗАТЬ</button>
        {missDistance<10000000 && <div>⚠ Опасен</div>}
      </div>
    </div>
  );
}
