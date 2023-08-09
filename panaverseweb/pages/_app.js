import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Menu />
      <Footer />
    </>
  );
}
