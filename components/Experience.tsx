import { Badge } from "@/components/badge"

const experiences = [
  {
    role: "Software Development Intern",
    company: "Minervaa",
    duration: "Sept 2024 - Dec 2024",
    description:
      "Developing scalable web applications, optimizing API integrations, and enhancing frontend experiences using Next.js, TypeScript, TailwindCSS and GSAP",
  },
  {
    role: "Technical Co-Lead",
    company: "OWASP NIE",
    duration: "Oct 2024 - Present",
    description:
      "Led and hosted cybersecurity events for 200+ students, managed open-source projects, and contributed to community learning initiatives.",
  },
]

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center mb-4">
            <Badge className="text-red-500 border-red-500 mr-3">02</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Experiences</h2>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line - hidden on mobile, visible on md and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          {/* Mobile vertical line - left aligned */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* This empty div maintains the layout on desktop */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Timeline dot - repositioned for mobile */}
              <div
                className={`
                w-6 h-6 absolute 
                md:left-1/2 md:-translate-x-1/2 md:-translate-y-1
                left-4 -translate-x-1/2
                flex items-center justify-center
              `}
              >
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>

              {/* Content container - full width on mobile, half on desktop */}
              <div
                className={`
                w-full md:w-1/2 
                pl-10 md:pl-0 md:pr-0
                ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}
              `}
              >
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


