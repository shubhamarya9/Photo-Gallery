import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Gallery(props) {
  return (
    <div>
      <Link to="/AddPhoto" className="add-button" />
      {/* <button className="add-button" onClick={props.onNavigate} /> */}
      <div className="photo-grid">
        {props.posts
          .sort(function(x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
}
Gallery.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};

export default Gallery;
