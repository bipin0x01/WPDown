import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="../path/to/flowbite/dist/flowbite.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
