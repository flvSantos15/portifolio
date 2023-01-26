import { GetStaticProps } from 'next'
import Head from 'next/head'

import { client, ssrCache } from '../../lib/urql'
import { useProjectsQuery, ProjectsDocument } from '../../generated/graphql'

import { Header } from '../../components/Header'
import { ProjectItem } from '../../components/ProjectItem'

import { ProjectsContainer } from '../../styles/ProjectsStyles'

interface IProject {
  slug: string
  title: string
  type: string
  description: string
  link: string
  thumbnail: string
}

interface ProjectProps {
  projects: IProject[]
}

export default function Projects({ projects }: ProjectProps) {
  const [{ data }] = useProjectsQuery()

  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Flavio Santos</title>
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
        {data?.projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              title={project.name}
              slug={project.slug as string}
              imgUrl={project.image[0].url}
              link={project?.sourceCode as string}
            />
          )
        })}
      </main>
    </ProjectsContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(ProjectsDocument, {}).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData()
    },
    revalidate: 86400
  }
}
