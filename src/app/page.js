import Image from "next/image";
import styles from "./page.module.css";
import Imagecontainer from "./components/imagecontainer/imagecontainer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Imagecontainer/>
      </main>
      
    </div>
  );
}
