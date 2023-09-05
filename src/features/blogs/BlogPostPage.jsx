import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBlogById, deletePost } from "./blogsSlice";

/** Individual BlogPost page for each blogs **/
function BlogPostPage() {
  /** react hooks to be used **/
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogId } = useParams();
  const blog = useSelector((state) => getBlogById(state, blogId));
  /** if blog doesn't exist then display a message **/
  if (!blog) {
    return (
      <section>
        <h5 className="m-2">Post not found !!!</h5>
      </section>
    );
  }
  /** method to handle deletion of a blogPost  **/
  const handleDelete = () => {
    dispatch(deletePost({ id: blog.id }));
    navigate("/");
  };

  return (
    <article className="blog-page">
      <div className="blog-page-wrapper">
        <h2>{blog.title}</h2>
        <div className="blog-category-wrapper">
          <div className="blog-page-category">{blog.category}</div>
        </div>
        <p>{blog.content}</p>
      </div>
      <div className="blog-page-editDelete">
        <Link
          to={`/blog/edit/${blog.id}`}
          className="custom-btn-1 m-1 py-2 px-3 blog-page-edit"
        >
          Edit Post
        </Link>
        <button
          type="button"
          className="btn btn-outline-danger m-1 blog-page-delete"
          onClick={handleDelete}
        >
          Delete Post
        </button>
      </div>
      <div className="blog-page-back">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="custom-btn-1 mb-3 fs-6 px-3 py-1"
        >
          Back
        </button>
      </div>
    </article>
  );
}

export default BlogPostPage;
