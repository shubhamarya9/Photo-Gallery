import React, { Component } from "react";

class Addphoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink
    };
    if (description && imageLink) {
      this.props.startAddingPost(post);
      this.props.onHistory.push("/");
    }
  }
  render() {
    return (
      <div>
        <h2>Upload to Gallery</h2>;
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="description" name="description" />
            <button>Upload</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Addphoto;
