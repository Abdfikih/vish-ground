import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Profile from "../components/Home/Profile";

export default function Home() {
  return (
    <div className="max-w-screen-m mx-auto bg-gradient-to-r from-black to-blue-800 min-h-screen overflow-x-hidden">
      <Head>
        <title>Vish Ground Control</title>
      </Head>
      <Header />
      <Hero />
      <Profile />
    </div>
  );
}
