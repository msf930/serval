import styles from "./style.module.scss";

import Link from "next/link";

const MobileNav = () => {
  return (
    <div className={styles.main}>
      {/* This checkbox will give us the toggle behavior, it will be hidden, but functional --> */}
      <input id="toggle" type="checkbox" className={styles.toggle} />

      {/* <!-- IMPORTANT: Any element that we want to modify when the checkbox state changes go here, being "sibling" of the checkbox element --> */}

      {/* <!-- This label is tied to the checkbox, and it will contain the toggle "buttons" --> */}
      <label className={styles.toggleContainer} for="toggle">
        {/* <!-- If menu is open, it will be the "X" icon, otherwise just a clickable area behind the hamburger menu icon --> */}
        <span className={`${styles.button} ${styles.buttonToggle}`}></span>
      </label>

      {/* <!-- The nav menu --> */}
      <nav className={styles.nav}>
        <Link className={styles.navItem} href="/">
          Home
        </Link>
        <Link className={styles.navItem} href="/portfolio">
          Portfolio
        </Link>
        <Link className={styles.navItem} href="/about">
          About
        </Link>
        <Link className={styles.navItem} href="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
