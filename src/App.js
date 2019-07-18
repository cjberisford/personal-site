import React from "react";
import "./App.css";
import Footer from "./components/footer/footer.js";
import Routes from "./routes.js";
//import Home from "./routes/home/home";

function App() {
  return (
    <div className="app">
      <div id="page-container">
        <div id="content-wrap">
          <Routes />
        </div>
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default App;
