"use client";

import { useEffect } from "react";

const useScrollHideBar = () => {
  useEffect(() => {
    const onScroll = () => {
      window.scrollTo(0, 1);
    };

    window.addEventListener("load", onScroll);
    window.addEventListener("orientationchange", onScroll);
    window.addEventListener("touchmove", onScroll);

    return () => {
      window.removeEventListener("load", onScroll);
      window.removeEventListener("orientationchange", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  }, []);
};

export default useScrollHideBar;
