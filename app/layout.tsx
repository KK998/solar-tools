import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solar Orodja",
  description: "Orodja za izračun sončne energije",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
