import './App.css';
import Navbar from "./components/Navbar/Navbar.js"
import Hero from "./components/Hero/Hero.js"
import About from "./components/About/About.js"
import Contact from "./components/Contact/Contact.js"
import Footer from "./components/Footer/Footer.js"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
