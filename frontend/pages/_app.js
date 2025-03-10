import { useState } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";
import "../styles.css";

import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Container } from "../components/Containers";

export default function App({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link
          rel="preload"
          href="https://use.typekit.net/yxg5izp.css"
          as="style"
        />
        <link rel="stylesheet" href="https://use.typekit.net/yxg5izp.css" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Pittsburgh based videographer and photographer."
        />
        <meta
          name="keywords"
          content="alex, grant, pittsburgh, photography, video, wedding video, videography"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://alxgrant.com/"></link>
      </Head>

      <Layout setSidebar={setSidebar} sidebar={sidebar}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

const Layout = ({ children, setSidebar, sidebar }) => {
  return (
    <div>
      <Navigation setSidebar={setSidebar} />
      <Backdrop onClick={() => setSidebar(false)} open={sidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #000;
  z-index: -1;
  opacity: 0;
  transition: all 0.5s ease;

  ${(props) =>
    props.open &&
    css`
      z-index: 999;
      opacity: 0.8;
    `}
`;
