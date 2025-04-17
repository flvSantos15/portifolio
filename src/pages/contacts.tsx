import Head from "next/head";
import { useEffect } from "react";

import Aos from "aos";

import { ContactContainer } from "../styles/ContactStyles";

import { Header } from "../components/Header";
// import { Footer } from '../components/Footer';
import { ContactList } from "../components/Contacts";

import "aos/dist/aos.css";

export default function Contacts() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ContactContainer>
      <Head>
        <title>Contacts</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container">
        <ContactList />
      </main>

      {/* <Footer /> */}
    </ContactContainer>
  );
}
