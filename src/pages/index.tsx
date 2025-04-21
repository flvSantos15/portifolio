import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

import Aos from "aos";
import { ProjectsDocument, useProjectsQuery } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

import { ExperiencesList } from "../components/Experiences";
import { Hero } from "../components/Hero";
import { Knowledges } from "../components/Knowledges";
import { Projects } from "../components/Projects";

import "aos/dist/aos.css";

export default function Home() {
  const [{ data }] = useProjectsQuery();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-800">
      <Head>
        <title>Flávio Santos</title>
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

      {/* <main className="flex flex-col gap-2"> */}
      <main className="bg-gray-800 min-h-screen w-4/5 p-6 text-gray-100">
        <Hero />
        <ExperiencesList />
        <Projects projects={data?.projects} />
        <Knowledges />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(ProjectsDocument, {}).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
