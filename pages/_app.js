import Link from "next/link";
import { sanityClient } from "../lib/sanity";
import "../styles/vars.css";
import "../styles/globals.css";
import "../styles/carousel.css";
import "../styles/background.css";
import "../styles/lines.css";
import Header from "../components/header";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
