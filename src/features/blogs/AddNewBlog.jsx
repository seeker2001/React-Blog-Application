import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addBlog } from "./blogsSlice";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** adding a new blogPost **/
function AddNewBlog() {
  /** react hooks to be used **/
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** using useState hook to keep track of contents of forms **/
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  /** methods to track changes made in input fields by the user **/
  const onTitleChange = (e) => setTitle(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  /** check if the content is valid **/
  const canSave = title && category && content;

  /** method will handle the submission of the form and display error or success messages accordingly **/
  const onSaveBlogClicked = () => {
    if (canSave) {
      dispatch(addBlog(title, category, content));
      setTitle("");
      setCategory("");
      setContent("");
      /** react-toast to display notifications **/
      toast.success("BlogPost Added Successfully", {
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
    <section className="mx-4 my-2 add-blog-section">
      <button
        type="button"
        className="custom-btn-1 mb-3 fs-6 px-3 py-1"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <h4>Add a New BlogPost</h4>
      <form className="ms-1 p-2 add-blog-form">
        <div className="mb-3">
          <label
            htmlFor="blogTitle"
            className="col-sm-2 col-form-label bold-text-1"
          >
            Blog Title:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="blogTitle"
              name="blogTitle"
              value={title}
              onChange={onTitleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="blogCategory"
            className="col-sm-2 col-form-label bold-text-1"
          >
            Blog Category:{" "}
          </label>
          <div className="col-sm-10">
            <select
              name="blogCategory"
              id="blogCategory"
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
            htmlFor="blogContent"
            className="col-sm-2 col-form-label bold-text-1"
          >
            Blog Content:{" "}
          </label>{" "}
          <div className="col-sm-10">
            <textarea
              id="blogContent"
              name="blogContent"
              className="form-control text-area"
              onChange={onContentChange}
              value={content}
            ></textarea>
          </div>
        </div>
        <div className="mt-3">
          <button
            type="button"
            onClick={onSaveBlogClicked}
            className="custom-btn-1 py-2 px-3"
          >
            Save BlogPost
          </button>
          <ToastContainer />
        </div>
      </form>
    </section>
  );
}

export default AddNewBlog;
