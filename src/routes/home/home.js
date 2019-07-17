import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

class Home extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images8.alphacoders.com/831/831563.png"
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <h3>Bespoke Application Design</h3>
            <p>Development of custom software from concept to deployment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/TdKG7sMet4o/maxresdefault.jpg"
            alt="Third slide"
            fluid
          />

          <Carousel.Caption>
            <h3>Responsive Web Development</h3>
            <p>
              Using the latest technologies to produce professional websites
              that work on any device
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BA-hXw-8Gjd5eqbc4/videoblocks-stock-market-072-hd_bl3zgzg8m_thumbnail-full01.png"
            alt="Third slide"
            fluid
          />

          <Carousel.Caption>
            <h3>Data Management</h3>
            <p>API design and implementation</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Home;
