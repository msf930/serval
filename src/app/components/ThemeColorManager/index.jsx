"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

const ThemeColorManager = () => {
  const pathname = usePathname();
  const [color, setColor] = useState("#003049");

  useEffect(() => {
    const handleRouteChange = (pathname) => {
      // Define theme colors for specific routes
      const themeColors = {
        "/": "#003049",
        "/about": "#fcbf49",
        "/portfolio": "#ffe1a8",
        "/contact": "#fc9827",
      };

      setColor(themeColors[pathname]); // Default to white if no match
      console.log(pathname);
    };

    // Set the initial theme color
    handleRouteChange(pathname);
  }, [pathname, color]);

  return (
    <Head>
      <meta name="theme-color" content={color} /> {/* Default color */}
    </Head>
  );
};

export default ThemeColorManager;
