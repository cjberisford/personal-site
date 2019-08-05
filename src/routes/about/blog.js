import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  //   replaceMarkup(string) {
  //     let string2 = string.replace(/&#8220;/g, '"');
  //     let string3 = string2.replace(/&#8221;/g, '"');
  //     let string4 = string3.replace(/&#8217;/g, "'");
  //     let string5 = string4.replace(/&#8230;/g, "...");
  //     let string6 = string5.replace(/(<([^>]+)>)/gi, "");
  //     return string6;
  //   }

  convertDate(date) {
    var d = new Date(date);
    return " " + d.toUTCString();
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
    if (this.state.data.posts) {
      return (
        <div className="preview content">
          {this.state.data.posts.map(post => (
            <Link to={`/${post.ID}`} key={post.ID}>
              <div className="blog-post" key={post.id}>
                <h3>{post.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                <i>
                  posted by {post.author.first_name} on
                  {this.convertDate(post.date)}
                </i>
              </div>
            </Link>
          ))}
        </div>
      );
    } else {
      return (
        <div className="center-anim lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      );
    }
  }
}
