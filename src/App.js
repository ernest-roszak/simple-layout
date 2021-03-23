import React from "react";

import "./styles.scss";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";



function App() {

  return (
    <div className="app">
      <Header />
      <Content />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
