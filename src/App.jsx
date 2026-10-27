import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Skills from './components/Skills/Skills';
import Workflow from './components/Workflow/Workflow';
import AI from './components/AI/AI';
import About from './components/About/About';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Home />
        <Experience />
        <Works />
        <Skills />
        <Workflow />
        <AI />
        <About />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
