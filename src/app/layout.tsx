import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/lib/Components/Navigation/NavBar";
import icon from '@/lib/Images/banner-closed.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Badi-Haki Martin's Website",
  description: "Badi-Haki Martin || Full-stack Developer, Game Developer,  Illustrator",
  authors: [
    { name: "B. Haki Martin", url: "https://bsky.app/" }
  ],
  generator:"Next.js",
  keywords:[
    'badi',
    'haki',
    'badi-haki',
    'webdev',
    'gamedev',
    'react',
    'nextjs',
    'art',
    'illustration',
  ],
  creator:"Badi-Haki Martin",
  applicationName:"Personal Website of Badi-Haki Martin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="">
          {children}
        </div>

      </body>
    </html>
  );
}
