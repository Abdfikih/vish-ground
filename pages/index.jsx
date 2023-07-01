import Head from "next/head";
import OurSpeakers from "../components/OurSpeakers/Index";
import AboutUs from "../components/AboutUs/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
import AboutEvent from "../components/AboutEvent/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
import Error from "./Error";

export default function Home() {
  return (
    <>
      <Head>
        <title>VishGround</title>
        <link rel="shortcut icon" href="/qiskit.png" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <AboutUs />
        <OurSpeakers />
        <TheyTrustedUs />
      </main>
      <Footer />
    </>
  );
}
