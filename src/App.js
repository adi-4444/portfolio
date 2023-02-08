import { useEffect } from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Home from './components/Home/Home';
import MySkills from './components/MySkills/MySkills';
import Works from './components/Works/Works';

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    }
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className='app-container'>
      <Home />
      <MySkills />
      <Works />
      <About />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
