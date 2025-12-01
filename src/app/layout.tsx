import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat} from 'next/font/google';
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
const mont = Montserrat({ 
  variable:"--font-Mont",
  subsets: ['latin'] });


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Cucumber",
  description: "Studio Cucumber (formerly Wander Wonder Media) is a media production company specialising in documentaries, music videos, and adventure films.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${mont.variable}  ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
