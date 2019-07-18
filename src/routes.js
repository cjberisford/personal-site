import React from "react";
import "./App.css";

import Header from "./components/header/header.js";
import Nav from "./components/navbar/nav.js";
import About from "./routes/about/about";
import Home from "./routes/home/home";
import Projects from "./routes/projects/projects";
import Contact from "./routes/contact/contact";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.homeHandler = this.homeHandler.bind(this);
    this.aboutHandler = this.aboutHandler.bind(this);
    this.projectsHandler = this.projectsHandler.bind(this);
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

  projectsHandler() {
    this.setState({
      currentPage: "projects"
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

      case "about":
        return <About />;

      case "projects":
        return <Projects />;

      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }
  render() {
    return (
      <>
        <Header className="header" home={this.homeHandler} />
        <Nav
          home={this.homeHandler}
          about={this.aboutHandler}
          projects={this.projectsHandler}
          contact={this.contactHandler}
        />
        <Container>
          <Row>
            <Col xs={0} sm={0} />
            <Col xs={12} sm={12} className="content-pane">
              {this.displayPage(this.state.currentPage)}
            </Col>
            <Col xs={0} sm={0} />
          </Row>
        </Container>
      </>
    );
  }
}

export default Routes;
