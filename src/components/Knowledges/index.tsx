import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular, FaNode, FaReact } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import {
  SiCypress,
  SiDocker,
  SiFastify,
  SiFirebase,
  SiGraphql,
  SiJest,
  SiMysql,
  SiNestjs,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { KnowledgeItem } from "./KnowledgeItem";

// TODO: remover os icones e deixar apenas o nome
// TODO: separa entre hard e soft skills

export function Knowledges() {
  return (
    <div className="w-full mt-12">
      <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full">
        <KnowledgeItem
          title="TypeScript"
          icon={<SiTypescript className="size-16 text-blue-500" />}
        />
        <KnowledgeItem
          title="ReactJS"
          icon={<FaReact className="size-16 text-blue-500" />}
        />
        <KnowledgeItem
          title="NextJS"
          icon={<TbBrandNextjs className="size-16 text-white" />}
        />
        <KnowledgeItem
          title="TailwindCSS"
          icon={<SiTailwindcss className="size-16 text-blue-500" />}
        />
        <KnowledgeItem
          title="Cypress"
          icon={<SiCypress className="size-16 text-white" />}
        />
        <KnowledgeItem
          title="NodeJS"
          icon={<FaNode className="size-16 text-green-600" />}
        />
        <KnowledgeItem
          title="NestJS"
          icon={<SiNestjs className="size-16 text-[#f1455f]" />}
        />
        <KnowledgeItem
          title="GraphQL"
          icon={<SiGraphql className="size-16 text-[#e6009d]" />}
        />
        <KnowledgeItem
          title="Firebase"
          icon={<SiFirebase className="size-16 text-[#ffa000]" />}
        />
        <KnowledgeItem
          title="Git"
          icon={<ImGit className="size-16 text-orange-600" />}
        />
        <KnowledgeItem
          title="Python"
          icon={<SiPython className="size-16 text-yellow-500" />}
        />
        <KnowledgeItem
          title="React-Query"
          icon={<SiReactquery className="size-16" />}
        />
        <KnowledgeItem
          title="Docker"
          icon={<SiDocker className="size-16 text-blue-400" />}
        />
        <KnowledgeItem
          title="Jest"
          icon={<SiJest className="size-16 text-green-600" />}
        />
        <KnowledgeItem
          title="Angular"
          icon={<FaAngular className="size-16 text-red-500" />}
        />
        <KnowledgeItem
          title="Redux"
          icon={<SiRedux className="size-16 text-[#764abc]" />}
        />
        <KnowledgeItem
          title="Prisma"
          icon={<SiPrisma className="size-16 text-[#16a394]" />}
        />
        <KnowledgeItem
          title="Fastify"
          icon={<SiFastify className="size-16 text-white" />}
        />
        <KnowledgeItem
          title="MySQL"
          icon={<SiMysql className="size-16 text-blue-700" />}
        />
        <KnowledgeItem
          title="PostgreSQL"
          icon={<BiLogoPostgresql className="size-16 text-blue-600" />}
        />
      </div>
    </div>
  );
}
