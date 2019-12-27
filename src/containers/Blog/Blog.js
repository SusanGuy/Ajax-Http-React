import React, { Component } from "react";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import { Route, NavLink } from "react-router-dom";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;

// <section>
//           <FullPost id={this.state.selectedPostId} />
//         </section>
