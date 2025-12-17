import { experiences } from "../../shared/constants/experiences";
import { ExperienciaItem } from "./ExperienceItem";

/**
 * Ideias:
 * Posso deixar como linha do tempo.
*/

export function ExperiencesList() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-4xl font-bold text-white mb-4">Experiences</h2>

      <div className="flex flex-col gap-4 w-full">
        {experiences.map((experience) => (
          <ExperienciaItem key={experience.id} data={experience} />
        ))}
      </div>
    </div>
  );
}
