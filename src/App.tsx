import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"

export const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}
