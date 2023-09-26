import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
// import Projects from "./Pages/Projects/Projects";
import { themeContext } from "./Context/Context";
import { useContext } from "react";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NavMobile from "./Components/NavMobile/NavMobile";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Work.jsx";
import Projects from "./Pages/Projects/Projects.jsx";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        className="App"
        id="Navbar"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <NavMobile />
      </div>
    </>
  );
}

export default App;
