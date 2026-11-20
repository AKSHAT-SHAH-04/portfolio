import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshat Shah — Full-stack Web3 Engineer",
  description:
    "Senior blockchain engineer: Solidity, Rust/Substrate, Hyperledger Fabric, GoQuorum, account abstraction, RWA tokenization and cross-chain systems.",
  openGraph: {
    title: "Akshat Shah — Full-stack Web3 Engineer",
    description: "Building blockchain systems end to end — protocols, wallets and dApps.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
