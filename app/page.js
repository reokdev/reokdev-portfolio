import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const App = () => {
  return (
      <main className="min-h-screen bg-white">
          <Navbar/>
          <Header/>
          <About/>
          <Projects/>
          <Contact/>
      </main>
  )
}
export default App