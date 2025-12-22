import { GetStaticProps } from "next";
import Head from "next/head";

import { ProjectsDocument, useProjectsQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

import { ProjectItem } from "../../components/ProjectItem";
import { useState } from "react";
import clsx from "clsx";

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  projects: IProject[];
}

// Adicionar os links da aplicação real.

type TFilters = "Backend" | "Frontend" | "Fullstack" | "Mobile" | ""

const filtersValue = ["Backend", "Frontend", "Fullstack", "Mobile"] as TFilters[]

export default function Projects({ projects }: ProjectProps) {
  const [{ data }] = useProjectsQuery();

  const [selectedFilter, setSlectedFilter] = useState<TFilters>("")

  const setSeletedFilter = (filter: TFilters) => {
    setSlectedFilter(filter)
  }

  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-800 pb-16 pt-6">
      <Head>
        <title>Projetos | Flavio Santos</title>
        <meta
          name="description"
          content="Sou um desenvolvedor FrontEnd e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor FrontEnd e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <main className="flex flex-col gap-10 bg-gray-800 min-h-screen w-full max-w-340 text-gray-100">
        <h2 className="text-4xl font-bold text-white mb-4 text-left w-full">Projects</h2>

        <div className="flex items-center gap-4">
          {filtersValue.map((filter, index) => {
            return (
              <button
                key={`${filter}.${index}`}
                onClick={() => setSeletedFilter(filter)}
                className={clsx(
                  `rounded-lg py-1 px-2 cursor-pointer`, {
                    'bg-[#03223f] text-white': selectedFilter === filter,
                    'bg-[#e1e1e1] text-black': selectedFilter !== filter
                  }
                )}
              >
                {filter}
              </button>
            )
          })}
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-full gap-2">
          {data?.projects.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                title={project.name}
                slug={project.slug as string}
                imgUrl={project?.image[0]?.url}
                description={project.description}
                // link="https://github.com/flvSantos15"
                link={project?.sourceCode as string}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(ProjectsDocument, {}).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 86400,
  };
};
