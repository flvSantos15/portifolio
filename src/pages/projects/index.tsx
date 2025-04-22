import { GetStaticProps } from "next";
import Head from "next/head";

import { ProjectsDocument, useProjectsQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

import { ProjectItem } from "../../components/ProjectItem";

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

export default function Projects({ projects }: ProjectProps) {
  const [{ data }] = useProjectsQuery();

  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-800 pb-16 px-10">
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

      <main className="grid grid-cols-1 lg:grid-cols-3 w-full my-8 gap-2">
        {data?.projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              title={project.name}
              slug={project.slug as string}
              imgUrl={project.image[0].url}
              description={project.description}
              // link="https://github.com/flvSantos15"
              link={project?.sourceCode as string}
            />
          );
        })}
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
