import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "../components/badge"
import { Card } from "../components/card"
import {Button}  from "./Button"
import type { Project } from "./Projects"

interface ProjectCardProps {
  project: Project
  isReversed?: boolean
}

export function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
  return (
    <div
      className={`relative grid grid-cols-1 gap-8 ${isReversed ? "md:grid-cols-[1fr_1.5fr]" : "md:grid-cols-[1.5fr_1fr]"}`}
    >
      {/* Project Image */}
      <div
        className={`group relative overflow-hidden rounded-lg shadow-xl transition-all ${isReversed ? "md:order-2" : "md:order-1"}`}
      >
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <div className="relative aspect-video w-full h-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Project Content */}
      <div
        className={`flex flex-col justify-center ${isReversed ? "md:order-1 md:items-end md:text-right" : "md:order-2 md:items-start"}`}
      >
        <div className="space-y-4 max-w-md">
          <div>
            <p className="text-red-500 font-mono mb-1">Featured Project</p>
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>

          <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-sm">
            <p className="text-gray-600">{project.description}</p>
          </Card>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-mono text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <Button>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            {project.demo &&           
              <Button>
              <Link href={project?.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Live Demo</span>
              </Link>
            </Button>}
          </div>
        </div>
      </div>
    </div>
  )
}


