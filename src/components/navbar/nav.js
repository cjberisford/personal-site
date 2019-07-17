import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Nav extends React.Component {
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
      <nav>
        <Container
          className={
            this.state.scroll > this.state.top ? "fixed-nav" : "default-nav"
          }
        >
          <Row>
            <Col>
              <h4 onClick={this.props.about}>About</h4>
            </Col>
            <Col>
              <h4 onClick={this.props.music}>Music</h4>
            </Col>
            <Col>
              <h4 onClick={this.props.contact}>Contact</h4>
            </Col>
          </Row>
        </Container>
      </nav>
    );
  }
}

export default Nav;
