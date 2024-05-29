"use client";

import { useEffect } from "react";
import useScrollHideBar from "@/app/hooks/useScroll";

import styles from "./style.module.scss";

import Image from "next/image";
import logoW from "../../../../public/servalDesignLogoSmallWhite.png";

import MobileNav from "../MobileNav";

const MobileHome = () => {
  useScrollHideBar();
  return (
    <div className={styles.mobileHomeCont}>
      <div className={styles.container}>
        <MobileNav />
        <section className={styles.mobileLogoCont}>
          <Image
            src={logoW}
            alt="logo"
            priority={true}
            className={styles.logoWMobile}
          />
        </section>
      </div>
    </div>
  );
};

export default MobileHome;
