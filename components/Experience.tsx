const experiences = [
  {
    role: "Technical Co-Lead",
    company: "OWASP NIE",
    duration: "Oct 2024 - Present",
    description:
      "Led and hosted cybersecurity events for 200+ students, managed open-source projects, and contributed to community learning initiatives.",
  },
  {
    role: "Software Development Intern",
    company: "Minervaa",
    duration: "Sept 2024 - Dec 2024",
    description:
      "Developing scalable web applications, optimizing API integrations, and enhancing frontend experiences using Next.js, TypeScript, TailwindCSS and GSAP",
  },

]

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600">Where I&apos;ve worked</h4>
        <h2 className="text-center text-4xl  font-Ovo font-bold mb-20">My Experiences</h2>


        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`mb-12 flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
              <div className="w-1/2"></div>
              <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-1 flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                <div className="p-6 bg-white shadow-lg rounded-lg border-2 border-black transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.role}</h3>
                  <p className="text-md font-medium text-black mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-600 mb-3">{exp.duration}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

