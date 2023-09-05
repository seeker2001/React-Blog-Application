import likeContext from "./likeContext";
import { useDispatch } from "react-redux";
import { toggleLike } from "../../features/blogs/blogsSlice";

/** create state for the context **/
const LikeState = (props) => {
  const dispatch = useDispatch();
  /** method for toggling like button of posts **/
  const toggleLikeContext = (id) => {
    dispatch(toggleLike({ id }));
  };

  return (
    <likeContext.Provider value={{ toggleLikeContext }}>
      {props.children}
    </likeContext.Provider>
  );
};

export default LikeState;
