import Basket from "@/components/Basket";
import styles from "./page.module.css";
import List from "@/components/List";

//xQlFXTP2NZmJXEgIfTF7eIBLmOqZaC6yaE4o8z7Y
async function getData() {
  try {
    const response = await fetch(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=xQlFXTP2NZmJXEgIfTF7eIBLmOqZaC6yaE4o8z7Y"
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data = await getData();
  const nearEarthObjects = data.near_earth_objects["2015-09-08"];

  return (
    <div>
      <div className={styles.flex_wrapper}>
        <List nearEarthObjects={nearEarthObjects} />
        <Basket />
      </div>
    </div>
  );
}
