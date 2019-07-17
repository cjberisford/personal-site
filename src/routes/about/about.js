import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class About extends React.Component {
  render() {
    return (
      <div className="content-window">
        <Container>
          <Row>
            <Col />
            <Col xs={10} className="content-pane">
              <strong>
                Hello, I'm Chris. I study Computer Science at the University of
                Sheffield.
              </strong>
              <br />
              <br />
              <p>
                In my spare time I love playing the piano, and this website is a
                result of blending my two main passions together; showcasing my
                ability to design and build websites, and play the piano. You
                might think "is that useful?", and the answer is "not
                especially".
              </p>
              <p>
                But this is not all I can do, oh no! You'll have to take my word
                for that at this stage, though.
              </p>
              <p>
                I specialise in playing romantic pieces as well as an unfocused
                blend of jazz and video game soundtracks. My passion for music
                almost certainly transcends my ability to perform it, but I
                never really consider that to be much of a problem.
              </p>
              <p>
                Although I have some formal music education, I am mostly
                self-taught. I took ABRSM Grade 1 aged ten, and achieved a
                distinction. This would prove to be the peak of my early
                musicianship, having become bored of the instrument.
              </p>
              <p>
                I didn't play a piano again for over five years until I saw a
                friend play. It was inspirational; creating in me a desire to
                emulate his skill.
              </p>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
