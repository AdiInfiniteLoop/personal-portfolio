import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
export interface ArchiveItem {
  year: string
  title: string
  madeAt: string
  builtWith: string[]
  githubLink?: string
  externalLink?: string
}

interface ArchiveTableProps {
  items: ArchiveItem[]
}

export function ArchiveTable({ items }: ArchiveTableProps) {
  return (
    <table className="w-full min-w-[800px] border-collapse">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="py-4 px-4 text-left font-medium text-gray-500 w-24">Year</th>
          <th className="py-4 px-4 text-left font-medium text-gray-500">Title</th>
          <th className="py-4 px-4 text-left font-medium text-gray-500 w-32">Made at</th>
          <th className="py-4 px-4 text-left font-medium text-gray-500">Built with</th>
          <th className="py-4 px-4 text-right font-medium text-gray-500 w-24">Link</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={`${item.year}-${item.title}`}
            className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
            }`}
          >
            <td className="py-4 px-4 text-red-500 align-top">{item.year}</td>
            <td className="py-4 px-4 font-medium align-top">{item.title}</td>
            <td className="py-4 px-4 text-gray-600 align-top">{item.madeAt}</td>
            <td className="py-4 px-4 text-gray-600 align-top">
              <div className="flex flex-wrap gap-1">
                {item.builtWith.map((tech, i) => (
                  <span key={i}>
                    {tech}
                    {i < item.builtWith.length - 1 && <span className="mx-1">·</span>}
                  </span>
                ))}
              </div>
            </td>
            <td className="py-4 px-4 text-right align-top">
              <div className="flex justify-end gap-2">
                {item.externalLink && (
                  <Link
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label={`Visit ${item.title} website`}
                  >
                    <ExternalLink size={18} />
                  </Link>
                )}
                {item.githubLink && (
                  <Link
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label={`View ${item.title} on GitHub`}
                  >
                    <Github size={18} />
                  </Link>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


