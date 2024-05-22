import styles from "./page.module.scss";
import MobileNav2 from "../components/MobileNav2";
import MobileForm from "../components/MobileForm";

export default function Contact() {
  return (
    <div className={styles.main}>
      <MobileNav2 />
      <div className={styles.cont}>
        <div className={styles.headerCont}>
          <h1>CONTACT</h1>
        </div>
        <div className={styles.formCont}>
          <MobileForm />
        </div>
      </div>
      <div className={styles.buffer}></div>
    </div>
  );
}
