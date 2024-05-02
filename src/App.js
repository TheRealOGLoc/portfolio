import './App.scss';
import Navbar from './component/TopNavbar/Navbar';
import AboutMe from './component/AboutMe/AboutMe';
import Parallax from './component/Parallax/Parallax';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App text-gray-200">
      <section id='Homepage'>
        <Navbar></Navbar>
        <AboutMe/>
      </section>
      <section id='Services'><Parallax type="services" /></section>
      <section>Services</section>
      <section id='Portfolio'><Parallax type="portfolio" /></section>
      <Portfolio></Portfolio>
      <section id='Contact'>
        <Contact/>
      </section>
    </div>
  );
}

export default App;
