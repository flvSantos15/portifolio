import { experiences } from "../../shared/constants/experiences";
import { ExperienciaItem } from "./ExperienceItem";

export function ExperiencesList() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-4xl font-bold text-white mb-4">About</h2>

      <p className="text-xl text-white">
        I&apos;m a passionate Fullstack Developer with over 3 years of
        experience, specializing in building efficient, scalable, and
        user-friendly applications — both web and mobile.
      </p>

      <div className="h-[1px] w-full my-14 bg-gray-600" />

      <h2 className="text-4xl font-bold text-white mb-4">Experiences</h2>

      <div className="grid grid-cols-3 gap-4 w-full border border-solid border-[red]">
        {experiences.map((experience) => (
          <ExperienciaItem key={experience.id} data={experience} />
        ))}
      </div>
    </div>
  );
}
