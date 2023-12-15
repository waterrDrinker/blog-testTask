import type { Metadata } from "next";
import "normalize.css";
import "./globals.scss";
import { hanken } from "./ui/fonts";
import Header from "./ui/header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog with some posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hanken.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
