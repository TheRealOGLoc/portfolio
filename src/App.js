import './App.scss';
import Navbar from './component/TopNavbar/Navbar';
import AboutMe from './component/AboutMe/AboutMe';

function App() {
  return (
    <div className="App text-gray-200">
      <section id='Homepage'>
        <Navbar></Navbar>
        <AboutMe/>
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section id='Contact'>Contact</section>
    </div>
  );
}

export default App;
