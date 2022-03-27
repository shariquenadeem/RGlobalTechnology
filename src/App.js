import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Client from "./components/Client";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import CallAction from "./components/CallAction";

function App() {
  return (
    <>
    <Topbar/>
    <Header/>
    <Hero />
    <main id="main">
      <About />
      <Services />
      <Client />
      <Portfolio />
      <Testimonials/>
      <CallAction/>
      <Team />
      <Contact />
    </main>
   <Footer/>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  </>
    
  );
}

export default App;
