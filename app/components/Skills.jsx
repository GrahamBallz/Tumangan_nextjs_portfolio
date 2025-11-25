export default function Skills() {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "React / Next.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "Database (Mongo / SQL)", level: 65 },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-800">{skill.name}</span>
              <span className="text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="bg-gray-600 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
