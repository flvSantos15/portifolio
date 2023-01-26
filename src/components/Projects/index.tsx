import Link from 'next/link'

import { SectionTitle } from '../SectionTitle'
import { ProjectItem } from './ProjectItem'
import { Container } from './styles'

interface IProject {
  id: string
  description: string
  name: string
  slug?: string | null | undefined
  type?: string
  tags: string[]
  link?: string
  image: {
    url: string
  }[]
}

interface ProjectsProps {
  projects: IProject[] | undefined
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Last Projects" />

      <section>
        {projects?.slice(0, 3).map((project) => (
          <ProjectItem
            key={project.slug}
            img={project.image?.[0]?.url as string}
            title={project.name}
            // type={project.type}
            slug={project?.slug as string}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">See all projects</Link>
      </button>
    </Container>
  )
}
