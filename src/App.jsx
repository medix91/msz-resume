import Navbar from './components/Navbar/Navbar.jsx'
import Home from './views/Home/Home.jsx'
import About from './views/About/About.jsx'
import CV from './views/Cv/Cv.jsx'
import Services from './views/Services/Services.jsx'
import Contact from './views/Contact/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="accueil">
          <Home />
        </section>
        <section id="à propos">
          <About />
        </section>
        <section id="cv">
          <CV />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
