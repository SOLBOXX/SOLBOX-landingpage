import type { Metadata } from "next";
import 'boxicons/css/boxicons.min.css';
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "SOLBOXX",
  description: "The Music App built on Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col bg-[url('/bg.png')] dark:bg-[url('/darkbg.png')]  bg-cover bg-no-repeat bg-center min-h-screen lg:h-screen pt-6">
        <Header />
        <main className="flex-grow max-w-full">{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}
