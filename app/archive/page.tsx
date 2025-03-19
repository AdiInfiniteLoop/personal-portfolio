import { Badge } from "@/components/badge"
import { ArchiveTable } from "@/components/archive-table"

export interface ArchiveItem {
  year: string
  title: string
  madeAt: string
  builtWith: string[]
  githubLink?: string
  externalLink?: string
}

export const archiveItems: ArchiveItem[] = [
  {
    year: "2023",
    title: "RustyDNS",
    madeAt: "—",
    builtWith: ["Rust", "Bash Scripting"],
    githubLink: "https://github.com/yourusername/rustydns",
  },
  {
    year: "2023",
    title: "RMS backend in Go",
    madeAt: "—",
    builtWith: ["Golang", "MongoDB"],
    githubLink: "https://github.com/yourusername/rms-backend",
  },
  {
    year: "2023",
    title: "BotterGo",
    madeAt: "—",
    builtWith: ["Golang"],
    githubLink: "https://github.com/yourusername/bottergo",
  },
  {
    year: "2023",
    title: "CleanRoute",
    madeAt: "—",
    builtWith: ["Golang", "Python", "JavaScript", "Machine Learning"],
    githubLink: "https://github.com/yourusername/cleanroute",
  },
  {
    year: "2023",
    title: "DAO inspired by Compound",
    madeAt: "—",
    builtWith: ["Solidity", "Hardhat", "JavaScript"],
    githubLink: "https://github.com/yourusername/dao-compound",
  },
  {
    year: "2023",
    title: "DLottery",
    madeAt: "—",
    builtWith: ["Golang"],
    githubLink: "https://github.com/yourusername/dlottery",
  },
  {
    year: "2023",
    title: "PM 2.5 Forcaster",
    madeAt: "—",
    builtWith: ["Numpy", "Pandas", "TensorFlow", "Scikit-learn", "Flask", "HTML5", "TailwindCSS", "JupyterLabs"],
    githubLink: "https://github.com/yourusername/pm25-forcaster",
  },
  {
    year: "2023",
    title: "Full Stack Travel Site",
    madeAt: "—",
    builtWith: ["JavaScript", "ExpressJS", "MongoDB", "ReactJS"],
    githubLink: "https://github.com/yourusername/travel-site",
    externalLink: "https://travel-site.vercel.app",
  },
  {
    year: "2023",
    title: "To Do First",
    madeAt: "—",
    builtWith: ["Next.js", "JavaScript", "TailwindCSS", "chrono-node"],
    githubLink: "https://github.com/yourusername/todo-first",
    externalLink: "https://todo-first.vercel.app",
  },
  {
    year: "2023",
    title: "SGM Official Site",
    madeAt: "—",
    builtWith: ["Next.js", "TypeScript", "TailwindCSS", "QR-Code Library"],
    githubLink: "https://github.com/yourusername/sgm-site",
    externalLink: "https://sgm-official.com",
  },
  {
    year: "2022",
    title: "ChatApp",
    madeAt: "—",
    builtWith: ["HTML5", "Socket.io", "JavaScript", "ExpressJS"],
    githubLink: "https://github.com/yourusername/chatapp",
  },
  {
    year: "2022",
    title: "Type.It.Down",
    madeAt: "—",
    builtWith: ["ReactJS", "Material UI", "Vercel"],
    githubLink: "https://github.com/yourusername/typeitdown",
    externalLink: "https://typeitdown.vercel.app",
  },
  {
    year: "2022",
    title: "MediChain",
    madeAt: "—",
    builtWith: ["Solidity", "Hardhat", "Next.js", "JavaScript", "The Graph", "TailwindCSS"],
    githubLink: "https://github.com/yourusername/medichain",
    externalLink: "https://medichain.vercel.app",
  },
  {
    year: "2022",
    title: "NFT Marketplace",
    madeAt: "—",
    builtWith: ["Solidity", "Hardhat", "Next.js", "The Graph", "TailwindCSS"],
    githubLink: "https://github.com/yourusername/nft-marketplace",
    externalLink: "https://nft-marketplace-demo.vercel.app",
  },
  {
    year: "2022",
    title: "Yelp Camp",
    madeAt: "—",
    builtWith: ["EJS", "JavaScript", "NodeJS", "MongoDB", "Cloudinary", "Bootstrap"],
    githubLink: "https://github.com/yourusername/yelp-camp",
  },
  {
    year: "2022",
    title: "MySpace",
    madeAt: "—",
    builtWith: ["EJS", "JavaScript", "NodeJS", "MongoDB", "TailwindCSS"],
    githubLink: "https://github.com/yourusername/myspace",
  },
]

export default function Archive() {
  return (
    <section className="container py-24 mx-auto" id="archive">
      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex items-center mb-4">
          <Badge className="text-red-500 border-red-500 mr-3">04</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Archive</h2>
        </div>
        <p className="text-gray-600 mt-2">A big list of things I've worked on</p>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-6"></div>
      </div>

      <div className="overflow-x-auto">
        <ArchiveTable items={archiveItems} />
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
        >
          My GitHub Profile
        </a>
      </div>
    </section>
  )
}


