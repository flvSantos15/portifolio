export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 text-gray-800">
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside mb-8">
          <li>JavaScript, TypeScript</li>
          <li>React, React Native, NextJS, Angular</li>
          <li>NodeJS, GraphQL, Prisma</li>
          <li>TailwindCSS, Sass, MUI</li>
          <li>PostgreSQL, MongoDB</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-2">
          <p>
            <strong>Bluemarble</strong> - Full-Stack Developer (Jan 2023 –
            Present)
          </p>
          <p>
            <strong>Prepera</strong> - Angular Developer (Jan 2023 – Feb 2024)
          </p>
          <p>
            <strong>Xgrow</strong> - React Developer (Aug 2022 – Jan 2023)
          </p>
          <p>
            <strong>Triplano</strong> - ReactJS Developer (Dec 2021 – Aug 2022)
          </p>
        </div>
      </section>
    </div>
  );
}
