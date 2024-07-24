import type { Metadata } from "next";
import { Inter, Chivo_Mono } from "next/font/google";

import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });
const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400", "700"] });

export const metadata: Metadata = {
  title: "personal-website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${chivoMono.className}`}>
        {children}
      </body>
    </html>
  );
}
