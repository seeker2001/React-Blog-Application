import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import React from "react";

/** excerpt for a blogpost which will be shown on the home screen **/
function BlogExcerpt({ blog }) {
  let titleContent = blog.title;
  if (blog.title.length > 20) {
    titleContent = blog.title.substring(0, 19) + "...";
  }
  return (
    <div className="blog">
      <Link className="blog-main" to={`blog/${blog.id}`}>
        <h4>{titleContent}</h4>
        <div className="blog-category">{blog.category}</div>
        <p>{blog.content.substring(0, 75)}...</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </Link>
      <div className="view-like-div">
        <LikeButton blog={blog} />
      </div>
    </div>
  );
}

export default BlogExcerpt;
