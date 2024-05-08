import './App.scss';
import Navbar from './component/TopNavbar/Navbar';
import AboutMe from './component/AboutMe/AboutMe';
import Parallax from './component/Parallax/Parallax';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Cursor from './component/Cursor/Cursor';
import Skills from './component/Skills/Skills';

function App() {
  return (
    <div className="App text-gray-200">
      <Cursor/>
      <section id='Homepage'>
        <Navbar></Navbar>
        <AboutMe/>
      </section>
      <section id='Skills'><Parallax type="services" /></section>
      <Skills/>
      <section id='Portfolio'><Parallax type="portfolio" /></section>
      <Portfolio></Portfolio>
      <section id='Contact'>
      <Contact/>
      </section>
    </div>
  );
}

export default App;
