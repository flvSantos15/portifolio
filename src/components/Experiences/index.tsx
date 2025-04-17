import { experiences } from "../../shared/constants/experiences";
import { SectionTitle } from "../SectionTitle";
import { ExperienciaItem } from "./ExperienceItem";
import { Container, SessionContainer } from "./styles";

export function ExperiencesList() {
  return (
    <Container>
      <SectionTitle title="3 Years" description="of experience" />

      <SessionContainer>
        {experiences.map((experience) => (
          <ExperienciaItem key={experience.id} data={experience} />
        ))}
      </SessionContainer>
    </Container>
  );
}
