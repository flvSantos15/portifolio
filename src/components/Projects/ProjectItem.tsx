import Image from "next/image";
import Link from "next/link";
import { AiOutlineRightCircle } from "react-icons/ai";

interface ProjectProps {
  title: string;
  slug: string;
  img: string;
  description: string;
}

// TODO: Habilitar tags, mas apenas na pagina de projetos

export function ProjectItem({ title, slug, img, description }: ProjectProps) {
  return (
    <div className="flex flex-col items-center w-full bg-[#010d23] p-2 rounded-lg">
      <div className="w-full max-h-76">
        <Image src={img} alt={title} width={200} height={200} className="w-full h-52 object-cover rounded-t-lg" />
      </div>

      <div className="flex flex-col gap-2 w-full pt-4 h-full">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-lg">{description}</span>
      </div>

      <button type="button" className="w-full flex bottom-0 justify-end">
        <Link href={`/projects/${slug}`} className="flex items-center gap-1 text-base underline underline-offset-4">
          See more <AiOutlineRightCircle />
        </Link>
      </button>
    </div>
  );
}
