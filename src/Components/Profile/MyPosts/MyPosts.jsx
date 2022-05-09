import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { FormsControl } from "../../Common/FormsControl/FormsControl";
import { required, maxLength } from "../../Common/Validation/Validation";
const MyPosts = (props) => {
  let postsData = props.posts;

  let mostsDataMaps = postsData.map((postData) => (
    <Post
      key={postData.message}
      message={postData.message}
      likes={postData.likes}
      imgSrc={postData.imgSrc}
    />
  ));

  const handleSubmit = (dataForm) => {
    props.addPost(dataForm.newPostText);
  };

  return (
    <div className={classes.myposts}>
      <div>
        <h3>my posts</h3>
        <MyPostReduxForm onSubmit={handleSubmit} />
        <div>{mostsDataMaps}</div>
      </div>
    </div>
  );
};
const maxLenght100 = maxLength(100);
const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormsControl}
          tagName={"textarea"}
          name={"newPostText"}
          placeholder={"enter new post message"}
          validate={[required, maxLenght100]}
          // onChange={onPostChange}
        />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};

const MyPostReduxForm = reduxForm({ form: "NewPostForm" })(MyPostForm);

export default MyPosts;
