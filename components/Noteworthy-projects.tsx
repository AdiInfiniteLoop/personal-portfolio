import Link from "next/link"

const projects = [
  { "title": "Brevity-bot", 
    "description": "An AI-powered article summarizer built using React and TypeScript, integrated with Rapid API for fetching content and Redux for state management, providing concise and accurate summaries.", 
    "tech": ["React", "TypeScript", "Rapid API", "Redux", "TailwindCSS"] },
  {
    "title": "SOS-alert",
    "description": "A robust CRUD application built with Go, PostgreSQL, Goose for database migrations, and Docker for containerization, ensuring efficient and scalable management of alert data.",
    "tech": ["Go", "PostgreSQL", "Goose", "Docker"]
  },
  {
    "title": "Posta-gresa",
    "description": "A repository focusing on PostgreSQL migrations, providing seamless version control and schema management to maintain data integrity.",
    "tech": ["Go", "PostgreSQL", "Goose", "Docker"]
  },
  {
    "title": "LetsGO",
    "description": "An educational resource designed to summarize key concepts of the Go programming language, providing concise and clear explanations",
    "tech": ["Go"]
  },
  {
    "title": "U-I",
    "description": "A website designed for the NGO 'UI,' focusing on providing education to underprivileged second-generation learners through interactive content and learning resources.",
    "tech": ["React", "JavaScript", "TailwindCSS"]
  },
  {
    "title": "Cine-sphere",
    "description": "A basic movie search application developed with JavaScript and Next.js, allowing users to explore and search movies with a simple and interactive interface.",
    "tech": ["JavaScript", "NextJS", "Motion", "TailwindCSS"]
  },

];



const ProjectsGrid: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Other Noteworthy Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-200 text-sm px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsGrid;

