import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <div>
        <img alt="no load logo" src={props.imgSrc} />
        <div>{props.message || "post 1"}</div>
      </div>
      <div>
        <span>{props.likes || "likes = 0"}</span>
      </div>
    </div>
  );
};

export default Post;
