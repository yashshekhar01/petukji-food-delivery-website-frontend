
import './App.css';

import Header from "./components/Header/Header";
import About from './components/UI/About';
import Contact from './components/UI/Contact';
import Hero from "./components/UI/Hero";
import Services from './components/UI/Services';
import Team from './components/UI/Team';
import Testimonial from './components/UI/Testimonial';


function App() {
  return (
    <>
     <Header />
     <Hero />
     <Services />
     <About />
     <Team />
     <Testimonial />
     <Contact />
    </>
  );
}

export default App;
