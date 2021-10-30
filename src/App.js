import { useState , useContext} from "react";
import About from "./components/about/About";
import Application from "./components/application/Application";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import ScrollToTop from "./components/scrollBtn/ScrollToTop";
import Security from "./components/security/Security";
import Services from "./components/services/Services";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // const [theme, setTheme] = useState(false);
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
    <div className={darkMode ? "App dark" : 'App' }>
      <Nav/>
      <Home/>
      <About/>
      <Security/>
      <Services/>
      <Application/>
      <Contact/>
      <Footer/>
      <ScrollToTop scrollBtn={scrollBtn}/>
    </div>
  );
}

export default App;
