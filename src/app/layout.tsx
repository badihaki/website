import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles.css';
import HomeIcon from "@/lib/Components/Navigation/HomeIcon";
import NavBar from "@/lib/Components/Navigation/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Badi-Haki Martin || React, Angular, Node, .NET",
  description: "Personal Website of B. Haki Martin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="flex flex-1">
            
            <HomeIcon />
            <NavBar />
          </div>
          {children}
      </body>
    </html>
  );
}
