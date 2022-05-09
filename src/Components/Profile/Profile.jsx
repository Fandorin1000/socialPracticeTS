import classes from "./Profile.module.css";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  console.log(props.profile);
  return (
    <div className={classes.profile}>
      <ProfileInfo
        profile={props.profile}
        setUserId={props.setUserId}
        isAuth={props.isAuth}
        status={props.status}
        updateStatus={props.updateStatus}
        userId={props.userId}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
