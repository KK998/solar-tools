"use client";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Footer from "@/app/Footer";
import Header from "@/app/Header";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Flowbite } from "flowbite-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flowbite>
      <html lang="sl">
        <body
          className={`${inter.className} dark:bg-slate-700 dark:text-white min-h-[100vh] flex flex-col`}
        >
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </Flowbite>
  );
}
