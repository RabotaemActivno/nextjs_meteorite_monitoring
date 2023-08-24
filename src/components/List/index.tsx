import styles from './List.module.css'
import Item from '../Item'

export default function List () {
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
          <Item />
          <Item />
          <Item />
          </div>
        </div>
    )
}