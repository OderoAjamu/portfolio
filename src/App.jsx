import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


const App = () => {
  return (
<>

  <Header />
  <Nav />
  <About /> 
  <Experience />
  <Services />
  <Portfolio />
  <Testimonials />
  <Footer />
  <Contact />
  
</>

  );
}

export default App;
