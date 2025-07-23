import Link from "next/link";
import { AiOutlineRightCircle } from "react-icons/ai";

interface ProjectProps {
  title: string;
  slug: string;
  img: string;
  description: string;
}

// width: 50rem;
// height: 100%;

export function ProjectItem({ title, slug, img, description }: ProjectProps) {
  return (
    // <ProjectContainer imgUrl={img} data-aos="fade-up">
    <div className="flex flex-col items-end relative w-full bg-background p-2 rounded-lg">
      <div className="w-full h-full relative rounded-lg">
        <div className="text">
          <h1 className="text-3xl font-bold text-primary"># {title}</h1>
          <span className="text-lg text-textLight">{description}</span>
        </div>
      </div>

      <button type="button">
        {/* <Link href={`/projects/${slug}`}> */}
        <Link href={`/projects`} className="flex items-center gap-1">
          See more <AiOutlineRightCircle />
        </Link>
      </button>
    </div>
  );
}
