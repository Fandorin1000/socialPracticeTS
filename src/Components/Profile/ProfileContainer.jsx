import classes from "./Profile.module.css";
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUserId,
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { Navigate } from "react-router-dom";
class ProfileContainer extends React.Component {
  
  componentDidMount() {
    if (!this.props.userId) return <Navigate to="/login" />;
    this.props.getStatus(this.props.userId);
    this.props.getProfile(this.props.userId);
  }
  render() {
    console.log("render Profile Component")
    return (
      <div className={classes.profile}>
        <Profile
          {...this.props}
          profile={this.props.profile}
          setUserId={this.props.setUserId}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          userId={this.props.userId}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.profilePage.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
  };
};

export default connect(mapStateToProps, {
  setUserId,
  getProfile,
  getStatus,
  updateStatus,
})(ProfileContainer);
