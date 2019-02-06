import React, { Component } from "react";

import Gallery from "./Gallery";
import Addphoto from "./Addphoto";
import { Route, Link } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
  componentDidMount() {
    this.props.uploadPosts();
    this.props.startLoadingComments();
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Socio-Gallery</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Gallery {...this.props} />

              {/* <Gallery
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={this.navigate}
              /> */}
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <Addphoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={params => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
