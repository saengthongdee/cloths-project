import { useState } from "react";
import "./App.css";
import Nav from "./assets/component/nav/page";
import Heroimage from "./assets/component/heroimage/page";
import Service from "./assets/component/service/page";
import Why from "./assets/component/WhyChoose/page";
import Gallery from "./assets/component/gallery/page";
import Footer from "./assets/component/footer/page";

import Marquee from "react-fast-marquee";

function App() {
  return (
    <>
      <Nav />
      <Heroimage />
      <Service />
      <Why/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App;
