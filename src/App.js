import "./App.css";

import React from "react";
import Footer from "./components/footer/footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header.js";
import Blog from "./routes/about/blog";
import Home from "./routes/home/home";
import Projects from "./routes/projects/projects";
import Contact from "./routes/contact/contact";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }
  render() {
    return (
      <Router>
        <div className="app">
          <div className="page-container">
            <Link to={"/home"}>
              <Header />
            </Link>
            <nav>
              <Container
                className={
                  this.state.scroll > this.state.top
                    ? "fixed-nav"
                    : "default-nav"
                }
              >
                <Row>
                  <Col xs={0} sm={0} />
                  <Col xs={12} sm={12}>
                    <Container>
                      <Row>
                        <Col xs={4} sm={4} className="left-col">
                          <Link to={"/blog"} className="nav-link">
                            <h4>Weblog</h4>
                          </Link>
                        </Col>
                        <Col xs={4} sm={4}>
                          <Link to={"/projects"} className="nav-link">
                            <h4>Projects</h4>
                          </Link>
                        </Col>
                        <Col xs={4} sm={4} className="right-col">
                          <Link to={"/contact"} className="nav-link">
                            <h4>Contact</h4>
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col xs={0} sm={0} />
                </Row>
              </Container>
            </nav>
            <div className="content-pane">
              <Container>
                <Row>
                  <Col xs={0} sm={0} />
                  <Col xs={12} sm={12}>
                    <Switch>
                      <Route exact path="/home" component={Home} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/blog" component={Blog} />
                      <Route path="/projects" component={Projects} />
                    </Switch>
                  </Col>
                  <Col xs={0} sm={0} />
                </Row>
              </Container>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
