import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.ID;

    axios
      .get(
        `https://public-api.wordpress.com/rest/v1/sites/cjberisford.wordpress.com/posts/${id}`
      )
      .then(res => {
        this.setState({ post: res.data });
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

  convertDate(date) {
    var d = new Date(date);
    return " " + d.toUTCString();
  }

  render() {
    let build;
    if (this.state.post.title) {
      build = (
        <>
          <div className="content blog-post" key={this.state.post.id}>
            <h3>{this.state.post.title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.post.content }}
            />

            <i>
              posted by {this.state.post.author.first_name} on
              {this.convertDate(this.state.post.date)}
            </i>
          </div>
          <div className="pageLink">
            <Link to="/blog">Return</Link>
            <br />
            <br />
          </div>
        </>
      );
    } else {
      build = (
        <div class="center-anim lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      );
    }
    return build;
  }
}

export default PostView;
