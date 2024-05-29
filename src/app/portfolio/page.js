"use client";

import useScrollHideBar from "@/app/hooks/useScroll";

import { projects } from "../data";
import CardMobile from "../components/CardMobile";
import CardMobile2 from "../components/CardMobile2";
import styles from "./page.module.scss";
import MobileNav2 from "../components/MobileNav2";
import { MdSwipeLeft } from "react-icons/md";

export default function Portfolio() {
  useScrollHideBar();
  return (
    <div className={styles.main}>
      <MobileNav2 />
      <div className={styles.cont}>
        <div className={styles.headerCont}>
          <h1>PORTFOLIO</h1>
        </div>
        <div className={styles.projectCont}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <CardMobile
                key={`p_${i}`}
                i={i}
                {...project}
                range={[i * 0.25, 1]}
                targetScale={1}
                total={projects.length}
              />
            );
          })}
        </div>
        <div className={styles.projectCont2}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <CardMobile2
                key={`p_${i}`}
                i={i}
                {...project}
                range={[i * 0.25, 1]}
                targetScale={1}
                total={projects.length}
              />
            );
          })}
        </div>
        <div className={styles.icon}>
          <MdSwipeLeft />
        </div>
      </div>
      <div className={styles.buffer}></div>
    </div>
  );
}
