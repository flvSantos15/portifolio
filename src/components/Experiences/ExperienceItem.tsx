interface ExperienciaProps {
  data: {
    year: string;
    title: string;
    description: string;
  };
}

export function ExperienciaItem({ data }: ExperienciaProps) {
  return (
    <div data-aos="fade-up">
      <div className="flex flex-col items-start justify-start w-full lg:max-w-80 rounded-lg transition bg-background p-[1.75rem] pt-[2.5rem]">
        <h1 className="text-inputBackground text-3xl mt-5">{data.year}</h1>
        <h3 className="text-inputBackgroundLight text-xl font-light mt-4">
          {data.title}
        </h3>
        <p className="text-textLight text-base font-light">
          {data.description.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
