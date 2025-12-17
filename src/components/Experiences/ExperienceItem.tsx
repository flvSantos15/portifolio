interface ExperienciaProps {
  data: {
    year: {
      initial: string;
      final: string;
    };
    title: string;
    description: string;
    company: string;
    tags: string[];
  };
}

export function ExperienciaItem({ data }: ExperienciaProps) {
  return (
    <div className="border-b pb-4">
      <div className="flex flex-col items-start justify-start w-full bg-background">
        <h1 className="text-2xl font-bold">
          {data.title}
        </h1>
        <p className="text-sm font-medium">{data.company}</p>

        <h4 className="text-inputBackground font-normal text-sm">
          {data.year.initial} - {data.year.final}
        </h4>

        <p className="text-base font-light">
          {data.description.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <div className="flex gap-2">
          {data.tags.map((tag) => (
            <span key={tag} className="bg-white text-black rounded-sm p-0.5">
              {tag}
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
