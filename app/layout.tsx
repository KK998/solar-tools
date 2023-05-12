"use client";
import { Inter } from "next/font/google";
import { Flowbite } from "flowbite-react";
import { ToastContainer } from "react-toastify";

import Footer from "@/app/Footer";
import Header from "@/app/Header";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
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
