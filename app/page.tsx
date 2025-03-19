
import EarthCanvas from "@/components/Earth";
import About from "@/components/About";
import Experience from "@/components/Experience";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
     <Navbar/> 
     <Hero/>
     <About/>
     <Experience/>
      <Projects/>
     <EarthCanvas/>
     <Contact/>
    </>
      )
}
