import React from "react";
import "./App.css";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Routes from "./routes.js";
//import Home from "./routes/home/home";

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <div id="content-wrap">
          {console.log(document.querySelector("nav"))}
          <Header className="header" />
          <Routes />
        </div>
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default App;
