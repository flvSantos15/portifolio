import { SectionTitle } from '../SectionTitle';
import { ExperienciaItem } from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="3 Years" description="of experience" />

      <section>
        {/* <ExperienciaItem
          year="2018"
          title="Dev Front-end"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
        /> */}
        <ExperienciaItem
          year="2020"
          title="Dev Front-end"
          description="Getting Experience from personal projects"
        />
        <ExperienciaItem
          year="2021"
          title="Front-end at Triplano Games"
          description="A game development company"
        />
        <ExperienciaItem
          year="2022"
          title="Front-end na Xgrow Learning Experience"
          description="A teaching experience platform"
        />
      </section>
    </Container>
  );
}
