import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description: string;
  imgUrl: string;
  slug: string;
  link: string;
}

export function ProjectItem({
  title,
  imgUrl,
  slug,
  link,
  description,
}: ProjectItemProps) {
  return (
    <div className="w-105 mx-auto shadow-md flex flex-col items-center bg-[#010d23] p-2 rounded-lg">
      <div className="w-full max-h-76">
        <Image src={imgUrl} loading="lazy" alt={title} width={200} height={200} className="w-full h-52 object-cover rounded-t-lg" />
      </div>

      <div className="flex flex-col gap-2 w-full pt-4 h-full text-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-lg">{description}</span>
      </div>

      <Link href={link} className="text-sm font-bold mb-2 text-white">
        repository: {slug}
      </Link>
    </div>
  );
}
