import { ItemContainer } from "./styles";

interface ExperienciaProps {
  data: {
    year: string;
    title: string;
    description: string;
  };
}

export function ExperienciaItem({ data }: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{data.year}</h1>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </ItemContainer>
  );
}
