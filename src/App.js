import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {

  return (
    <div className="App bg-neutral-200">
        <Navbar />
        <Hero />
        <Projects />
    </div>
  );
}

export default App;
