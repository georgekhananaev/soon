import 'aos/dist/aos.css';
import '../styles/globals.scss'
import Head from "next/head";

import useWindowSize from "../hooks/useWindowDimensions";
import {useEffect} from "react";

import AOS from "aos";

function App({ Component, pageProps }) {
  const { height, width } = useWindowSize();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "smooth",
      once: true,
      mirror: true
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />

        <title>ReactAtomics - Where Art meets Artificial Intelligence</title>
        <meta name="title" content="ReactAtomics - Beautifully Crafted Open Source Icons" />
        <meta name="description" content="ReactAtomics is an AI-based architecture that self-designs and constructs websites." />
        <meta name="keywords" content="ReactAtomics, AI Revolution" />

        <meta property="og:site_name" content="ReactAtomics" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reactatomics.com/" />
        <meta property="og:title" content="ReactAtomics - Where art meets artificial intelligence" />
        <meta property="og:description" content="ReactAtomics is an AI-based architecture that self-designs and constructs websites." />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://reactatomics.com/" />
        <meta property="twitter:title" content="ReactAtomics - Where art meets artificial intelligence" />
        <meta property="twitter:description" content="ReactAtomics is an AI-based architecture that self-designs and constructs websites." />
        <meta property="twitter:image" content="/thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
