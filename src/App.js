import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useState } from 'react';
import {storage} from './firebaseConf';
import Projects from './components/Projects';

function App() {
  const [image, setImage] = useState('');
  const [Url, setUrl] = useState('');
  
  const upload = () => {
    if (image == null)
      return;
    setUrl("Getting Download Link...")
  
    // Sending File to Firebase Storage
    storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed", alert("Bien envoyé !"), alert, () => {
  
        // Getting Download Link
        storage.ref("images").child(image.name).getDownloadURL()
          .then((url) => {
            setUrl(url);
          })
      });
  }

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Projects />
    </div>
  );
}

export default App;
