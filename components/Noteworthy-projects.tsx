import { Button } from "@/components/button";
import Link from "next/link"

const projects = [
  {
    title: "RustyDNS",
    description:
    "Built a DNS server from scratch using Rust and the optimized server to handle DNS requests efficiently, ensuring quick response times with robust security measures.",
    tech: ["Rust", "Bash", "Scripting"],
  },
  {
    title: "RMS backend in Go",
    description:
    "This is the backend of Restaurant Management System (RMS) in Go. Full CRUD functionality is implemented in Go including JWT authentication. It uses Gin for routing and MongoDB for storing the data.",
    tech: ["Golang", "MongoDB"],
  },
  {
    title: "BotterGo",
    description:
    "An NLP featured slack bot using Go using WIT for NLP and WolframAlpha as knowledge repository. This Go server connects WIT, WolframAlpha and Slack platform.",
    tech: ["Golang"],
  },
  {
    title: "CleanRoute",
    description:
    "A routing tool with forecasting capability for calculating the air pollution exposure and energy consumption of a route and utilizing this information to show the LEAP (Least Exposure to Air Pollution) and LCO2 (Least Carbon Emission) routes.",
    tech: ["Golang", "Python", "JavaScript", "Machine Learning"],
  },
  {
    title: "DAO inspired by Compound",
    description:
    "An implementation of a DAO inspired by Compound. This is a 100% on-chain voting and on-chain governance DAO. This is the hardhat repository.",
    tech: ["Solidity", "Hardhat", "JavaScript"],
  },
  {
    title: "DLottery",
    description:
    "A trustless and completely verifiable lottery system making use of blockchain technology. Users can enter lottery by paying the entry fees and after a fix time, randomly a winner is chosen and sum of money is transferred to the winner.",
    tech: ["Golang"],
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
        <div className="flex justify-center mt-8">
          <Link href='/archive'>
            <Button className="bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded-full hover:-translate-y-1 transition duration-300">
              Show More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;

