import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="overflow-x-hidden bg-neutral-900 text-white min-h-screen">
        <Header />
        <Main className="flex-1" />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
