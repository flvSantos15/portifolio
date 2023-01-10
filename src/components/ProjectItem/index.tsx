/* eslint-disable react/no-unused-prop-types */
import Link from 'next/link';
import { Container } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug?: string;
  link: string;
}

export function ProjectItem({ title, type, imgUrl, link }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      {/* <Link href={`/projetos/${slug}`}> */}
      <Link href={`${link}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
