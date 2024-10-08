import type { Metadata } from "next";
import { Inter, Chivo_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });
const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["100", "400", "700"] });
const instrumentSans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "400", "700"] });


export const metadata: Metadata = {
  title: "Arwen's Webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivoMono.className}`}>
      <Analytics />
        {children}
      </body>
    </html>
  );
}