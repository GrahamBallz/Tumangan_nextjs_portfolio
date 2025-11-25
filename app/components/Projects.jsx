export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      tech: "Next.js, Tailwind",
      link: "#",
    },
    {
      title: "Task Manager App",
      description: "A productivity app to manage daily tasks.",
      tech: "React, Node.js",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A markdown-based blog platform with user authentication.",
      tech: "Next.js, Firebase",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-black border border-gray-500 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{proj.title}</h3>
            <p className="text-gray-300 mb-2">{proj.description}</p>
            <p className="text-gray-500 mb-4 text-sm">Tech: {proj.tech}</p>
            <a href={proj.link} className="text-gray-500 hover:text-gray-600">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
