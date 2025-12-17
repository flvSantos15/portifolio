import Link from "next/link";

import { ProjectItem } from "./ProjectItem";

interface IProject {
  id: string;
  description: string;
  name: string;
  slug?: string | null | undefined;
  type?: string;
  tags: string[];
  link?: string;
  image: {
    url: string;
  }[];
}

interface ProjectsProps {
  projects: IProject[] | undefined;
}

// TODO: Adicionar mais projetos e as areas do projeto (Financeiro, Saude, etc).

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full">
      <h2 className="text-4xl font-bold text-white mb-4 text-left w-full">Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {projects?.slice(0, 3).map((project) => (
          <ProjectItem
            key={project.slug}
            img={project.image?.[0]?.url as string}
            title={project.name}
            description={project.description}
            // type={project.type}
            slug={project?.slug as string}
          />
        ))}
      </div>
      <button
        type="button"
        className="text-primary py-4 px-3 rounded-lg border-none"
      >
        <Link href="/projects" className="underline underline-offset-4">See all projects</Link>
      </button>
    </div>
  );
}
