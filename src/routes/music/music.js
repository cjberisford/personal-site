import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Music extends React.Component {
  render() {
    return (
      <div className="content-window">
        <Container>
          <Row>
            <Col />
            <Col xs={10} className="content-pane">
              <div className="blogPost">
                <h4>Summer work experience</h4>
                <h6>Posted Wednesday 17th July, 2019</h6>
                <hr />
                <p>
                  This is an example of a blog post which I write to demonstrate
                  just how much of the screen I need to take up in order to give
                  a good representation of how the finished website will
                  actually look. Maybe I've written enough text but I'm not
                  entirely sure yet; oh well, better to just keep going I
                  reckon.
                </p>
              </div>
              <div className="blogPost">
                <h4>Summer work experience</h4>
                <h6>Posted Wednesday 17th July, 2019</h6>
                <hr />
                <p>
                  This is an example of a blog post which I write to demonstrate
                  just how much of the screen I need to take up in order to give
                  a good representation of how the finished website will
                  actually look. Maybe I've written enough text but I'm not
                  entirely sure yet; oh well, better to just keep going I
                  reckon.
                </p>
              </div>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Music;
