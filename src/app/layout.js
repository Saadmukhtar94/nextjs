import React from "react";
import { Geist, Geist_Mono } from "next/font/google"
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import Header2 from "./components/header";
import Footer from "./components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">    
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header2/>
       {children}
<Footer/>
      </body>
    </html>
  );
}
