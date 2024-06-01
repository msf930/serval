import { Inter } from "next/font/google";
import "./globals.css";

import ThemeColorManager from "./components/ThemeColorManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Serval Designs",
  description:
    "Innovative web development company using the latest technologies to build stunning, high-performance websites. Specializing in e-commerce, mobile apps, and SEO. Let us bring your vision to life. Get in touch today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeColorManager />
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
