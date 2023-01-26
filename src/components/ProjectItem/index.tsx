/* eslint-disable react/no-unused-prop-types */
import Link from 'next/link'
import { Container } from './styles'

interface ProjectItemProps {
  title: string
  imgUrl: string
  slug?: string
  link: string
}

export function ProjectItem({ title, imgUrl, link }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      {/* <Link href={`/projetos/${slug}`}> */}
      <Link href={`${link}`}>
        <>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
          </section>
        </>
      </Link>
    </Container>
  )
}
