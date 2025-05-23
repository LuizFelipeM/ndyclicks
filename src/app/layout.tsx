import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Abhaya_Libre, Inspiration } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-abhaya",
  display: "swap",
});

const inspiration = Inspiration({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inspiration",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ndy Clicks - Fotografia",
  description: "Capturando momentos especiais com sensibilidade e carinho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="block relative min-h-screen">
      <body className={`${abhaya.variable} ${inspiration.variable} font-abhaya block relative min-h-screen`}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
