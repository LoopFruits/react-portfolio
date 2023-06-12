import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import  Contact  from "./components/Contact";


function App() {
  return (
    <div className="bg-gradient-to-b from-red-500 to-violet-500">
      <NavBar/>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact/>
      <SocialLinks />
    </div>
  );
}

export default App;
