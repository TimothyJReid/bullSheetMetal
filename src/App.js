import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
