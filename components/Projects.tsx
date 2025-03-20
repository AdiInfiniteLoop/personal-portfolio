import { ProjectCard } from "./projects-card"
import { Badge } from "../components/badge"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: "kizuna",
    title: "Kizuna",
    description:
      "A real-time chat application with instant messaging capabilities, user presence indicators, and end-to-end encryption. Features include message history, file sharing, and responsive design for mobile and desktop users.",
    image: "/kizuna.jpeg",
    technologies: ["React", "TypeScript", "Socket.io", "Tailwind CSS", "MongoDB", "NodeJS", "Redis"],
    github: "https://github.com/AdiInfiniteLoop/Kizuna",
    demo: "https://kizuna-ten.vercel.app",
  },
  {
    id: "authora",
    title: "Authora",
    description:
      "A robust authentication service built using Go with Gin, PostgreSQL, SQLC, Redis, and JWT. It provides a complete authentication flow, including sign-up, login, session management, and token-based authentication with comprehensive security features.",
    image: "/authora.jpeg",
    technologies: ["Go", "Gin", "PostgreSQL", "Redis", "JWT", "Docker", "REST API"],
    github: "https://github.com/AdiInfiniteLoop/Authora",
  },
  {
    id: "landofeldoria",
    title: "Land of Eldoria",
    description:
      "A 15-level Capture The Flag (CTF) challenge with virtual machines hosted in Azure, featuring various security puzzles and scenarios. Designed to test and improve cybersecurity skills through practical, hands-on challenges in a gamified environment.",
    image: "/landofeldoria.jpeg",
    technologies: ["Azure", "Linux", "Security", "CTF"],
    github: "https://github.com/AdiInfiniteLoop/CTF",
  },
]

export default function Projects() {
  return (
    <section className="container py-24 mx-auto" id="projects">
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <Badge className="text-red-500 border-red-500 mr-3">03</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Some Things I&apos;ve Built</h2>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4"></div>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}


