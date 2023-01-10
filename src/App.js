import React from "react";
import "./styles.css";
import Image from "./components/Image";
import Name from "./components/Name";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="main">
      <Image />
      <Name />
      <Buttons />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
