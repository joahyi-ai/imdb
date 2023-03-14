import Header from "@/components/Header";
import "./globals.css";
import Head from "next/head";
import Pricing from "@/components/Pricing";
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
        {/* Header */}
        <Header />
        {/* <Navbar />
        <Pricing /> */}
        {/* Navbar*/}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  );
}
