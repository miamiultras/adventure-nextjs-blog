import { ReactNode } from "react";
import Head from "next/head";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

const siteTitle = "Adventure Blog";

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content={siteTitle} />
      </Head>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export { Layout };
