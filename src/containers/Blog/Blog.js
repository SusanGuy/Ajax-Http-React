import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };
  async componentDidMount() {
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
    let error;
    if (this.state.error) {
      error = (
        <p
          style={{
            textAlign: "center",
            color: "red"
          }}
        >
          Something went wrong!
        </p>
      );
    }
    const posts = this.state.posts.map(post => {
      return (
        <Post
          author={post.author}
          title={post.title}
          key={post.id}
          clicked={() => this.postsSelectedHandler(post.id)}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        {error}
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
