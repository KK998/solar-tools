"use client";

import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "@/app/Footer";
import Header from "@/app/Header";
import { Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flowbite>
      <html lang="sl">
        <body className={`${inter.className} min-h-[100vh] flex flex-col`}>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </Flowbite>
  );
}
