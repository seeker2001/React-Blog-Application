import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
  /** some default blogs in the array **/
  blogs: [
    {
      id: nanoid(),
      title: "React",
      category: "Tech",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facilis, esse quos aut provident excepturi ratione. Voluptates fugit reprehenderit corrupti consequuntur maiores consectetur natus accusantium ipsam, beatae harum ut. Ipsum suscipit quis, expedita non atque porro natus ratione cupiditate cum. Voluptatem dicta dolores libero ab qui non adipisci commodi, quidem delectus illo, dolorum dolor ipsum autem quod deserunt impedit. Aliquam ad quis soluta eaque corporis vero exercitationem vitae assumenda saepe.",
      liked: 0,
    },
    {
      id: nanoid(),
      title: "Workout For Home",
      category: "Fitness",
      content:
        "mollitia sint dolorum itaque! Voluptatum quidem ab non suscipit vero eligendi iste dolorem quasi eius! Cumque expedita omnis fugiat cupiditate quas error corrupti provident odio corporis explicabo ad quos est vero tenetur maxime odit, a beatae ea voluptate impedit dignissimos atque voluptates! Ab doloribus minus ea veniam quas velit consequuntur facilis, nulla assumenda atque unde repellat aperiam incidunt harum ipsa itaque excepturi eius modi dolorum? Quasi, nesciunt expedita temporibus eaque quis omnis neque dicta consequatur culpa deserunt aliquam illo exercitationem porro numquam debitis aut ex velit excepturi animi eos voluptatibus doloribus pariatur quas qui. Delectus iste fuga quae tempore fugiat quisquam praesentium, soluta dicta laboriosam consequuntur distinctio architecto cum. Atque, delectus? Vitae voluptatem veniam aspernatur consequuntur dolor!",
      liked: 0,
    },
    {
      id: nanoid(),
      title: "Travel Dubai",
      category: "Travel",
      content:
        "Sit esse magni laborum nesciunt impedit consectetur, nisi sint omnis odio labore pariatur, repudiandae earum quia, vitae magnam veritatis molestiae maxime. Totam, cum, aperiam dolore deserunt asperiores voluptate quae sed quod nulla laudantium assumenda ducimus fugit doloribus, perferendis distinctio et sapiente dolorem expedita consectetur eos! Consequuntur aut vitae labore, dolores nam placeat sapiente, pariatur mollitia sint dolorum itaque! Voluptatum quidem ab non suscipit vero eligendi iste dolorem quasi eius! Cumque expedita omnis fugiat cupiditate quas error corrupti provident odio corporis explicabo ad quos est vero tenetur maxime odit, a beatae ea voluptate impedit dignissimos atque voluptates! Ab doloribus minus ea veniam quas velit consequuntur facilis, nulla assumenda atque unde repellat aperiam incidunt harum ipsa itaque excepturi eius modi dolorum? Quasi, nesciunt",
      liked: 0,
    },
  ],
  error: null,
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    /** reducer function to handle adding a new blog **/
    addBlog: {
      reducer(state, action) {
        state.blogs.push(action.payload);
      },
      /** getting the data to format it properly and pass it to the reducer **/
      prepare(title, category, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            category,
            content,
            liked: 0,
          },
        };
      },
    },
    /** reducer function for handling updation of new blog **/
    updateBlog: {
      reducer(state, action) {
        const { id } = action.payload;
        const blogs = state.blogs.filter((blog) => blog.id != id);
        state.blogs = [...blogs, action.payload];
      },
      /** getting the data to format it properly and pass it to the reducer **/
      prepare(id, title, category, content, liked) {
        return {
          payload: {
            id,
            title,
            category,
            content,
            liked,
          },
        };
      },
    },
    /** reducer function for handling the deletion of a post **/
    deletePost: {
      reducer(state, action) {
        const { id } = action.payload;
        const blogs = state.blogs.filter((blog) => blog.id != id);
        state.blogs = [...blogs];
      },
    },
    /**  reducer function toggles the like button for a post **/
    toggleLike(state, action) {
      const { id } = action.payload;
      const blog_ = state.blogs.find((blog) => blog.id == id);
      if (blog_.liked) {
        blog_.liked = 0;
      } else {
        blog_.liked = 1;
      }
    },
  },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const getBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id == blogId);

export const { addBlog, updateBlog, deletePost, toggleLike } =
  blogsSlice.actions;
export default blogsSlice.reducer;
