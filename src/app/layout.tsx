import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto_mono = Roboto_Mono({
  subsets : ["latin"],
  display : "swap"
});


export const metadata: Metadata = {
  title: "Book Kart",
  description: "this is the e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.className} `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
