import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { ImGit } from 'react-icons/im';
import {
  SiChakraui,
  SiTypescript,
  SiCypress,
  SiTailwindcss
} from 'react-icons/si';

import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

export function Knowledges() {
  return (
    <Container>
      <SectionTitle title="Knowledges" />
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Javascript" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="TypeScript" icon={<SiTypescript />} />
        <KnowledgeItem title="ReactJS" icon={<FaReact />} />
        <KnowledgeItem title="NextJS" icon={<TbBrandNextjs />} />
        <KnowledgeItem title="TailwindCSS" icon={<SiTailwindcss />} />
        <KnowledgeItem title="Chakra-UI" icon={<SiChakraui />} />
        <KnowledgeItem title="Cypress" icon={<SiCypress />} />
        <KnowledgeItem title="Git" icon={<ImGit />} />
      </section>
    </Container>
  );
}
