import Link from "next/link"


import EarthCanvas from "@/components/Earth";
import About from "@/components/About";
import Experience from "@/components/Experience";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects"
import ProjectsGrid from "@/components/Noteworthy-projects"
import FadeInOnScroll from "@/components/FadeInOnScroll"

export default function Home() {
  return (
    <>
      <Navbar/> 
      <FadeInOnScroll>
        <Hero/>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <About/>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Experience/>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Projects/>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ProjectsGrid/>
      </FadeInOnScroll>
      <FadeInOnScroll>

        <EarthCanvas/>
        <Contact/>
      </FadeInOnScroll>
    </>
  )
}
