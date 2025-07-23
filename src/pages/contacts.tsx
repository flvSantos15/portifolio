import Head from "next/head";
import { useEffect } from "react";

import Aos from "aos";

// import { Footer } from '../components/Footer';
import { ContactList } from "../components/Contacts";

import "aos/dist/aos.css";

export default function Contacts() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-800 pb-16">
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

      <main className="container">
        <ContactList />
      </main>
    </div>
  );
}
