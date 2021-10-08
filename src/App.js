import { useState } from "react";
import About from "./components/about/About";
import Application from "./components/application/Application";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import ScrollToTop from "./components/scrollBtn/ScrollToTop";
import Security from "./components/security/Security";
import Services from "./components/services/Services";

function App() {
  const [scrollBtn , setScrollBtn] = useState(false);
  
  const showScrollBtn = () => {
    if(window.scrollY >= 700){
      setScrollBtn(true);
    }else{
      setScrollBtn(false);
    }
  }
  window.addEventListener('scroll', showScrollBtn);
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Security/>
      <Services/>
      <Application/>
      <Contact/>
      <Footer/>
      <ScrollToTop scrollBtn={scrollBtn}/>
    </>
  );
}

export default App;
