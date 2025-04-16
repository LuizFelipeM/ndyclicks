import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Abhaya_Libre, Inspiration } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-abhaya",
});

const inspiration = Inspiration({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inspiration",
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
    <html lang="pt-BR">
      <body className={`${abhaya.variable} ${inspiration.variable} font-abhaya`}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
