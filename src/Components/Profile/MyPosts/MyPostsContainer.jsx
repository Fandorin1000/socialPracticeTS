import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addPost } from "../../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = compose(
  connect(mapStateToProps, { addPost }),
  withAuthRedirect
)(MyPosts);

export default MyPostsContainer;
