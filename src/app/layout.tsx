import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lynn Kathomi | Software Developer & IT Student",
  description: "IT student at Zetech University and software developer passionate about creating innovative solutions. Expertise in web development, programming, and database management.",
  keywords: [
    "Lynn Kathomi",
    "Software Developer",
    "IT Student",
    "Web Development",
    "React",
    "Django",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Lynn Kathomi" }],
  creator: "Lynn Kathomi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-black to-purple-950/20`}>
        {children}
      </body>
    </html>
  );
} 