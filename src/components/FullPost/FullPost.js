import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedContent: null
  };
  async componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedContent ||
        this.state.loadedContent.id !== this.props.id
      ) {
        const post = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/" + this.props.id
        );

        this.setState({
          loadedContent: post.data
        });
      }
    }
  }

  render() {
    let post = (
      <p
        style={{
          textAlign: "center"
        }}
      >
        Please select a Post!
      </p>
    );
    if (this.props.id) {
      post = (
        <p
          style={{
            textAlign: "center"
          }}
        >
          Loading...
        </p>
      );
    }

    if (this.state.loadedContent) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedContent.title}</h1>
          <p>{this.state.loadedContent.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
