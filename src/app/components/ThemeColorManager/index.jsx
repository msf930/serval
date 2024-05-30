"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

const ThemeColorManager = () => {
  const pathname = usePathname();
  const [color, setColor] = useState("#003049");

  useEffect(() => {
    const handleRouteChange = (pathname) => {
      const themeColors = {
        "/": "#003049",
        "/about": "#FCBF49",
        "/portfolio": "#FFE1A8",
        "/contact": "#FC9827",
      };

      setColor(themeColors[pathname]);
    };

    handleRouteChange(pathname);
  }, [pathname, color]);

  return <meta name="theme-color" content={color} />;
};

export default ThemeColorManager;
