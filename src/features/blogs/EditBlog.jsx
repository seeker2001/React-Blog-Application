import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, updateBlog } from "./blogsSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditBlog() {
  /** react hooks to be used **/
  const { blogId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** get the current blog which is to be edited **/
  const blog = useSelector((state) => getBlogById(state, blogId));

  /** using useState hook to keep track of contents of forms **/
  const [title, setTitle] = useState(blog.title);
  const [category, setCategory] = useState(blog.category);
  const [content, setContent] = useState(blog.content);

  /** if blog doesn't exits display a message **/
  if (!blog) {
    return (
      <section>
        <h5 className="m-2">Post not found !!!</h5>
      </section>
    );
  }

  /** methods to track changes made in input fields by the user **/
  const onTitleChange = (e) => setTitle(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  /** check is the data in forms is valid **/
  const canSave = [title, content, category].every(Boolean);

  /** handle submission of form and display success or error messages accordingly **/
  const onUpdateBlogClicked = () => {
    if (canSave) {
      dispatch(updateBlog(blog.id, title, category, content, blog.liked));
      setTitle("");
      setCategory("");
      setContent("");
      /** react-toast to display notifications **/
      toast.success("BlogPost Updated Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (!title) {
        toast.error("Error: Title cannot be empty.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (!category) {
        toast.error("Error: Category cannot be empty", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Error: Content cannot be empty", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <section className="mx-4 my-2">
      <button
        type="button"
        className="custom-btn-1 fs-6 mb-3 px-3 py-1"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h4 className="">Edit BlogPost</h4>
      <form className="ms-1 p-2">
        <div className="mb-3">
          <label
            htmlFor="blogTitleForEdit"
            className="col-sm-2 col-form-label bold-text-1"
          >
            Blog Title:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="blogTitleForEdit"
              name="blogTitleForEdit"
              value={title}
              onChange={onTitleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="blogCategoryForEdit"
            className="col-sm-2 col-form-label bold-text-1"
          >
            Blog Category:{" "}
          </label>
          <div className="col-sm-10">
            <select
              name="blogCategoryForEdit"
              id="blogCategoryForEdit"
              className="form-select col-sm-10"
              value={category}
              onChange={onCategoryChange}
            >
              <option value="">Chose a category</option>
              <option value="Tech">Tech</option>
              <option value="Fitness">Fitness</option>
              <option value="Food">Food</option>
              <option value="Sports">Sports</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Art">Art</option>
              <option value="Travel">Travel</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="blogContentForEdit"
            className="col-sm-2 col-form-label bold-text-1"
          >
            Blog Content:{" "}
          </label>{" "}
          <div className="col-sm-10">
            <textarea
              id="blogContentForEdit"
              name="blogContentForEdit"
              className="form-control text-area"
              onChange={onContentChange}
              value={content}
            ></textarea>
          </div>
        </div>
        <div className="mt-3">
          <button
            type="button"
            onClick={onUpdateBlogClicked}
            className="custom-btn-1 py-2 px-3"
          >
            Update BlogPost
          </button>
          <ToastContainer />
        </div>
      </form>
    </section>
  );
}

export default EditBlog;
