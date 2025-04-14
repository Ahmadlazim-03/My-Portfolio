import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import AnimatedBackground from "../components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
