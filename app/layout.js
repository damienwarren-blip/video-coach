import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "QuickChat – Video conversations that actually get answered",
  description: "90%+ response rates · Real insights · Security by design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactLenis root options={{ lerp: 0.06 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}