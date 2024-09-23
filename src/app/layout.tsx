import type { Metadata } from "next";
import 'boxicons/css/boxicons.min.css';
import Header from "@/context/Header";
import Footer from "@/component/Footer";
import { SolanaWalletProvider } from "../context/WalletProvider";
import "./globals.css";


export const metadata: Metadata = {
  title: "SOLBOX",
  description: "The Music App built on Blockchain",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col bg-[url('/bg.jpg')] dark:bg-[url('/darkbg.jpg')] bg-cover bg-center min-h-screen lg:h-screen pt-6">
        <SolanaWalletProvider> 
        <Header />
        <main className="flex-grow max-w-full">{children}</main> 
        </SolanaWalletProvider>
        <Footer />
      </body>
    </html>
  );
}

