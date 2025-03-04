"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="flex flex-col min-h-screen w-full">
            <Header /> {/* ✅ Header stays at the top */}

            <main className="flex-grow w-full px-4 md:px-8 lg:px-12">{children}</main> {/* ✅ Ensures full width with padding */}

            <Footer /> {/* ✅ Footer stays at the bottom */}
          </div>

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
