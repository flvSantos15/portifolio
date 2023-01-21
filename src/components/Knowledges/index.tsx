import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaNode, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { ImGit } from 'react-icons/im'
import {
  SiChakraui,
  SiTypescript,
  SiCypress,
  SiTailwindcss,
  SiStyledcomponents,
  SiGraphql,
  SiFirebase,
  SiVite,
  SiAdonisjs
} from 'react-icons/si'

import { SectionTitle } from '../SectionTitle'
import { KnowledgeItem } from './KnowledgeItem'
import { Container } from './styles'

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
        <KnowledgeItem title="ViteJS" icon={<SiVite />} />
        <KnowledgeItem title="React Native" icon={<FaReact />} />
        <KnowledgeItem title="TailwindCSS" icon={<SiTailwindcss />} />
        <KnowledgeItem title="Chakra-UI" icon={<SiChakraui />} />
        <KnowledgeItem title="Cypress" icon={<SiCypress />} />
        <KnowledgeItem title="AdonisJS" icon={<SiAdonisjs />} />
        <KnowledgeItem title="NodeJS" icon={<FaNode />} />
        <KnowledgeItem
          title="Styled-Components"
          icon={<SiStyledcomponents />}
        />
        <KnowledgeItem title="GraphQL" icon={<SiGraphql />} />
        <KnowledgeItem title="Firebase" icon={<SiFirebase />} />
        <KnowledgeItem title="Git" icon={<ImGit />} />
      </section>
    </Container>
  )
}
