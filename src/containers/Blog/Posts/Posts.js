import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
    error: false
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const posts = await axios.get("/posts");
      const data = posts.data.slice(0, 4);

      const updatedPosts = data.map(post => {
        return {
          ...post,
          author: "Max"
        };
      });

      this.setState({
        posts: updatedPosts
      });
    } catch (err) {
      this.setState({
        error: true
      });
    }
  }

  postsSelectedHandler = id => {
    this.setState({
      selectedPostId: id
    });
  };
  render() {
    let posts = (
      <p
        style={{
          textAlign: "center",
          color: "red"
        }}
      >
        Something went wrong!
      </p>
    );

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            author={post.author}
            title={post.title}
            key={post.id}
            clicked={() => this.postsSelectedHandler(post.id)}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
