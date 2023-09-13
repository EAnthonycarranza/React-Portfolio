import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './styles/reset.css';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero-image"></div>
      <div className="white-background"></div>
      <div className="contact-form"> </div>
      <main>
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
