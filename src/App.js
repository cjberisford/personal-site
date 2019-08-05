import "./App.css";
import "./Nav.css";
import "./Loader.css";

import React from "react";
import Footer from "./components/footer/footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import Header from "./components/header/header.js";
import Blog from "./routes/about/blog";
import Home from "./routes/home/home";
import Projects from "./routes/projects/projects";
import Contact from "./routes/contact/contact";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostView from "./routes/about/post";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);

    this.mobileNav = false;

    this.showMobileNav = this.showMobileNav.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  showMobileNav() {
    console.log(this.state.mobileNav);
    if (this.state.mobileNav) {
      console.log("setting to false");
      this.setState({ mobileNav: false });
    } else {
      console.log("setting to true");
      this.setState({ mobileNav: true });
    }
  }

  componentDidMount() {
    console.log(this.height);
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight / 3 });
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
            <Container>
              <Col xs={0} sm={0} />
              <Col xs={12} sm={12} className="contact-info">
                <div>
                  <a
                    href="https://www.reddit.com/user/NewWorldSympathy"
                    className="fa fa-reddit pageLink"
                  />
                  <a
                    href="https://github.com/cjberisford"
                    className="fa fa-github pageLink"
                  />
                  <a
                    href="https://www.linkedin.com/in/cjberisford/"
                    className="fa fa-linkedin-square pageLink"
                  />
                </div>
              </Col>
              <Col xs={0} sm={0} />
            </Container>

            <nav>
              <Container
                className={
                  this.state.scroll > this.state.top
                    ? "fixed-nav"
                    : "default-nav"
                }
              >
                <Row>
                  <Col className="center">
                    <Container className="responsive-hack">
                      <Row>
                        <Col xs={10} lg={6} className="logo-link">
                          <Link to={"/home"}>
                            <h1>Chris Berisford</h1>
                          </Link>
                          <Link to={"/home"}>
                            <h2>Chris Berisford</h2>
                          </Link>
                          <Link to={"/home"}>
                            <h5>Chris Berisford</h5>
                          </Link>
                        </Col>
                        <Col xs={2} lg={6} className="right-col">
                          <Link to={"/blog"}>
                            <h4>Blog</h4>
                          </Link>
                          {this.state.scroll > this.state.top ? " " : null}
                          <Link to={"/projects"}>
                            <h4>Projects</h4>
                          </Link>
                          {this.state.scroll > this.state.top ? " " : null}
                          <Link to={"/contact"}>
                            <h4>Contact</h4>
                          </Link>{" "}
                          <div className="hamburger-menu">
                            {" "}
                            <div
                              className={
                                this.state.mobileNav ? "fa change" : "fa"
                              }
                              onClick={this.showMobileNav}
                            >
                              <div class="bar1" />
                              <div class="bar2" />
                              <div class="bar3" />
                            </div>
                            {/* <i
                              onClick={this.showMobileNav}
                              className="fa fa-nav fa-bars"
                            />{" "} */}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </nav>

            <div
              className={
                this.state.scroll > this.state.top
                  ? "mobile-nav-container-fixed"
                  : "mobile-nav-container-default"
              }
            >
              <Container>
                <Row>
                  <Col>
                    {this.state.mobileNav ? (
                      <div
                        className="
                        mobile-nav-default"
                      >
                        {" "}
                        <Link to={"/blog"}>
                          <h6>Blog</h6>
                        </Link>
                        <Link to={"/projects"}>
                          <h6>Projects</h6>
                        </Link>
                        <Link to={"/contact"}>
                          <h6>Contact</h6>
                        </Link>{" "}
                      </div>
                    ) : null}
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="content-area">
              <Container>
                <Row>
                  <Col>
                    <Switch>
                      <Route exact path="/home" component={Home} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/blog" component={Blog} />
                      <Route path="/projects" component={Projects} />
                      <Route path="/:ID" component={PostView} />
                    </Switch>
                  </Col>
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
