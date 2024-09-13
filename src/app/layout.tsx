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
      <body className="antialiased flex flex-col bg-[url('/bg.jpg')] dark:bg-[url('/darkbg.jpg')] bg-cover bg-center h-screen pt-6">
        <Header />
        <main className="flex-grow">{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}
