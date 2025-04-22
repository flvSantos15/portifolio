import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description?: string;
  imgUrl: string;
  slug?: string;
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
    <div className="w-[420px] mx-auto bg-background rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>

      <Link href={link} className="text-xl font-bold mb-2 text-textLight">
        Repo: {slug}
      </Link>

      <p className="text-textLight">{description}</p>

      {imgUrl && (
        <Image
          src={imgUrl}
          alt={title}
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-48 object-cover mt-4"
        />
      )}
    </div>
  );
}
