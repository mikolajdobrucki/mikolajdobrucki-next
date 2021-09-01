import Link from "next/link";
import { sanityClient } from "../lib/sanity";
import "../styles/globals.css";
import Header from "../components/header";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
}
