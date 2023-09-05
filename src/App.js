import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BlogsList from "./features/blogs/BlogsList";
import AddNewBlog from "./features/blogs/AddNewBlog";
import BlogPostPage from "./features/blogs/BlogPostPage";
import EditBlog from "./features/blogs/EditBlog";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BlogsList />} />
        <Route path="blog">
          <Route index element={<AddNewBlog />} />
          <Route path=":blogId" element={<BlogPostPage />} />
          <Route path="edit/:blogId" element={<EditBlog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
