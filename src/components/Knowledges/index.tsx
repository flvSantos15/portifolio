import { FaNode, FaReact } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAdonisjs,
  SiCypress,
  SiFirebase,
  SiGraphql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { KnowledgeItem } from "./KnowledgeItem";

export function Knowledges() {
  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>

      <div className="grid grid-cols-5 space-x-4 space-y-6 w-full">
        <KnowledgeItem
          title="Javascript"
          icon={<IoLogoJavascript className="size-28 text-blue-500" />}
        />
        <KnowledgeItem
          title="TypeScript"
          icon={<SiTypescript className="size-28 text-blue-500" />}
        />
        <KnowledgeItem
          title="ReactJS"
          icon={<FaReact className="size-28 text-blue-500" />}
        />
        <KnowledgeItem
          title="NextJS"
          icon={<TbBrandNextjs className="size-28 text-black" />}
        />
        <KnowledgeItem
          title="TailwindCSS"
          icon={<SiTailwindcss className="size-28" />}
        />
        <KnowledgeItem
          title="Cypress"
          icon={<SiCypress className="size-28" />}
        />
        <KnowledgeItem
          title="NodeJS"
          icon={<FaNode className="size-28 text-green-600" />}
        />
        <KnowledgeItem
          title="NextJS"
          icon={<SiAdonisjs className="size-28" />}
        />
        <KnowledgeItem
          title="GraphQL"
          icon={<SiGraphql className="size-28 text-pink-700" />}
        />
        <KnowledgeItem
          title="Firebase"
          icon={<SiFirebase className="size-28" />}
        />
        <KnowledgeItem
          title="Git"
          icon={<ImGit className="size-28 text-orange-700" />}
        />
        <KnowledgeItem title="Python" icon={<ImGit className="size-28" />} />
        <KnowledgeItem
          title="React-Query"
          icon={<ImGit className="size-28" />}
        />
        <KnowledgeItem title="Docker" icon={<ImGit className="size-28" />} />
        <KnowledgeItem title="Jest" icon={<ImGit className="size-28" />} />
      </div>
    </div>
  );
}
