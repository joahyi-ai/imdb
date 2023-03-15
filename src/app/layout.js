import Header from "@/components/Header";
import "./globals.css";
import Head from "next/head";
import Pricing from "@/components/Pricing";
import NavbarOne from "@/components/NavbarOne";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>IMDb</title>
        <meta content="IMDb" key="title" />
      </Head>
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* <NavbarOne />
        <Pricing /> */}
          {/* Navbar*/}
          <Navbar />
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
