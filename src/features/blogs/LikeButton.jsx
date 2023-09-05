import React from "react";
import { useContext } from "react";
import likeContext from "../../context/likes/likeContext";

/** like button component for each blogPost **/
function LikeButton({ blog }) {
  /** using useContext hook for handlink liking of the posts **/
  let context = useContext(likeContext);

  /** like buttons styling will be different depending on whether the post has been liked or not **/
  let thumbUp;
  if (blog.liked) {
    thumbUp = <span className="post-liked material-icons">thumb_up</span>;
  } else {
    thumbUp = <span className="post-not-liked material-icons">thumb_up</span>;
  }

  /** on clicking toggle the like button **/
  const handleLikeClick = () => {
    context.toggleLikeContext(blog.id);
  };

  return (
    <div>
      <button onClick={handleLikeClick} type="button" className="like-button">
        {thumbUp}
      </button>
    </div>
  );
}

export default LikeButton;
