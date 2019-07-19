import React, { Component } from "react";
import axios from "axios";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/cjberisford.wordpress.com/posts/"
      )
      .then(res => {
        this.setState({ data: res.data });
        const container = document.querySelector(".content");
        let scr = container.querySelectorAll("script");
        scr.forEach(node => {
          let parent = node.parentElement;
          let d = document.createElement("script");
          d.async = node.async;
          d.src = node.src;
          d.type = "text/javascript";
          parent.insertBefore(d, node);
          parent.removeChild(node);
          d.onload = console.log(d);
        });
      })
      .catch(error => console.log(error));
  }

  parseOutScripts(content) {}

  render() {
    console.log(this.state.data.posts);

    if (this.state.data.posts) {
      return (
        <div className="content">
          <h1>Grrr</h1>
          {this.state.data.found}
        </div>
      );
    } else {
      return null;
    }
  }
}
