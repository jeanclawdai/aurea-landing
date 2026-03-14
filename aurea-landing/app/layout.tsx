import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});



export const metadata: Metadata = {
  title: "Aurea - AI Marketing Systems for Aesthetic Clinics",
  description: "Transform your clinic's digital presence with intelligent automation. From content creation to patient engagement, Aurea handles it all.",
  keywords: ["AI marketing", "aesthetic clinics", "medical spa", "digital marketing", "automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
