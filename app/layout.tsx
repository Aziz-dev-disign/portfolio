import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://abdoulaziz-bande-portfolio.vercel.app/"
  ),
  title: "AbdoulAziz Bande",
  description: "Developer Portfolio By Bande Abdoul Aziz",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Bande Abdoul Aziz"],
  openGraph: {
    title: "Bande Abdoul Aziz",
    description: "Software Engineer",
    images: "/My.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
