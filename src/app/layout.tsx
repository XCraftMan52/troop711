import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Troop 711 Albion",
  description: "Troop 711 Albion Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-[#0f350f]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
