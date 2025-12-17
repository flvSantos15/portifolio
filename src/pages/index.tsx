import { GetServerSideProps } from "next";
import Head from "next/head";

import { ProjectsDocument, useProjectsQuery } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

import { About } from "../components/About";
import { ExperiencesList } from "../components/Experiences";
import { Hero } from "../components/Hero";
import { Knowledges } from "../components/Knowledges";
import { Projects } from "../components/Projects";

export default function Home() {
  const [{ data }] = useProjectsQuery();

  // TODO: Colocar um verificador de quantas visitas recebo.
  // TODO: Colocar uma função de 'já vai?'

  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-800 pb-16 pt-6">
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

      <main className="flex flex-col gap-10 bg-gray-800 min-h-screen w-full max-w-340 px-6 text-gray-100">
        <Hero />

        {/* TODO: Fazer como abas */}
        <About />

        <ExperiencesList />

        <Projects projects={data?.projects} />

        <Knowledges />

        {/* Courses (Certificados) */}
        {/* Education */}
        {/* Blog */}
        {/* Contacts (Linkedin e Github) */}
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
