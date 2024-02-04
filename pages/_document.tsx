import { Html, Head, Main, NextScript } from "next/document";
import { Cards, Footer, Header } from "./components";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Cards />
        <Footer />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
