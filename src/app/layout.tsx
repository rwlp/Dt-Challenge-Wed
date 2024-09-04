import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Dealer App",
  description: "Developers Today Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-200 dark:bg-blue-950`}>
        <Header />
        <main
          className="w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center"
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
