import Link from 'next/link'
import { AiOutlineRightCircle } from 'react-icons/ai'
import { ProjectContainer } from './styles'

interface ProjectProps {
  title: string
  slug: string
  img: string
}

export function ProjectItem({ title, slug, img }: ProjectProps) {
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          {/* <h2>- {type}</h2> */}
        </div>
      </section>
      <button type="button">
        {/* <Link href={`/projects/${slug}`}> */}
        <Link href={`/projects`}>
          See more <AiOutlineRightCircle />
        </Link>
      </button>
    </ProjectContainer>
  )
}
