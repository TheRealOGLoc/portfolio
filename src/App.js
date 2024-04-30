import './App.scss';
import Navbar from './component/TopNavbar/Navbar';

function App() {
  return (
    <div className="App bg-slate-900 text-gray-200">
      <section id='Homepage'>
        <Navbar></Navbar>
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
