import { useSelector } from "react-redux";
import { selectAllBlogs } from "./blogsSlice";
import BlogExcerpt from "./BlogExcerpt";

import React from "react";

/** list of all blog-excerpts on the home page **/
function BlogsList() {
  const blogs = useSelector(selectAllBlogs);
  let content;
  content = blogs.map((blog) => <BlogExcerpt key={blog.id} blog={blog} />);
  return <section className="blogs-section">{content}</section>;
}

export default BlogsList;
