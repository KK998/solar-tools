"use client";
import { Inter } from "next/font/google";
import { Flowbite } from "flowbite-react";
import { ToastContainer } from "react-toastify";

import Footer from "@/app/Footer";
import Header from "@/app/Header";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ConfigContext, config } from "./config";
import useDarkTheme from "@/components/Presentation/useDarkTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useDarkTheme();

  return (
    <Flowbite>
      <ConfigContext.Provider value={config}>
        <html lang="sl" className={darkMode ? "dark" : ""}>
          <body
            className={`${inter.className} dark:bg-slate-700 dark:text-white min-h-[100vh] flex flex-col`}
          >
            <Header />
            {children}
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </ConfigContext.Provider>
    </Flowbite>
  );
}
