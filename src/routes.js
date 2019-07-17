import React from "react";
import "./App.css";

import Nav from "./components/navbar/nav.js";
import About from "./routes/about/about";
import Home from "./routes/home/home";
import Music from "./routes/music/music";
import Contact from "./routes/contact/contact";

var page;

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.homeHandler = this.homeHandler.bind(this);
    this.aboutHandler = this.aboutHandler.bind(this);
    this.musicHandler = this.musicHandler.bind(this);
    this.contactHandler = this.contactHandler.bind(this);

    this.state = {
      currentPage: "home"
    };
  }

  homeHandler() {
    this.setState({
      currentPage: "home"
    });
  }

  aboutHandler() {
    this.setState({
      currentPage: "about"
    });
  }

  musicHandler() {
    this.setState({
      currentPage: "music"
    });
  }

  contactHandler() {
    this.setState({
      currentPage: "contact"
    });
  }

  displayPage(currentPage) {
    switch (currentPage) {
      case "home":
        return <Home />;
        break;
      case "about":
        return <About />;
        break;
      case "music":
        return <Music />;
        break;
      case "contact":
        return <Contact />;
        break;
    }
  }
  render() {
    return (
      <>
        <Nav
          home={this.homeHandler}
          about={this.aboutHandler}
          music={this.musicHandler}
          contact={this.contactHandler}
        />
        {this.displayPage(this.state.currentPage)}
      </>
    );
  }
}

export default Routes;
