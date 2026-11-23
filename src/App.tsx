import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"

export const App = () => {
  return (
    <div className="mx-auto w-[calc(100%-40px)] max-w-[900px] max-[600px]:w-[calc(100%-28px)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
