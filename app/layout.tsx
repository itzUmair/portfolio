import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Umair Khan",
  description: "Umair's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "mx-4 md:mx-16 min-[2000px]:w-[1600px] min-[2000px]:mx-auto min-h-screen" +
          inter.className
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
