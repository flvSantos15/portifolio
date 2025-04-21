/* eslint-disable react/no-unused-prop-types */
import Link from "next/link";
// import { Container } from './styles'

interface ProjectItemProps {
  title: string;
  imgUrl: string;
  slug?: string;
  link: string;
}

export function ProjectItem({ title, imgUrl, link }: ProjectItemProps) {
  return (
    // <Container imgUrl={imgUrl}>
    <div className="flex flex-col gap-1 border border-solid border-[yellow]">
      {/* <Link href={`/projetos/${slug}`}> */}
      <Link href={`${link}`}>
        <h1 className="text-2xl text-white">{title}</h1>
      </Link>
      <span className="text-white">description</span>
    </div>
  );
}
