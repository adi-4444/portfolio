import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';


function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Works />
      <About />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
