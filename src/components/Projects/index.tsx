import Link from "next/link";

import { SectionTitle } from "../SectionTitle";
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

// transition: 0.5s;

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col items-center gap-10 w-full mt-2">
      <SectionTitle title="Last Projects" />

      <div className="flex flex-col gap-8 w-full">
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
        <Link href="/projects">See all projects</Link>
      </button>
    </div>
  );
}
