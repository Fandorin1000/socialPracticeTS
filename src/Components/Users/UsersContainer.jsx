import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleIsFollowing,
  getUsersStart,
} from "../../redux/usersReducer";
import {
  getUsersSelector,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsLoading,
  getIsFollowing,
} from "../../redux/usersSelector";
import { setUserId } from "../../redux/profileReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersStart(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersStart(pageNumber, this.props.pageSize);
  };
 
  render() {
    console.log("render Users Component")
    return (
      <>
        {this.props.isLoading && <Preloader />}
        <Users
          pages={this.pages}
          onPageChanged={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          setUserId={this.props.setUserId}
          isLoading={this.props.isLoading}
          isFollowing={this.props.isFollowing}
          toggleIsFollowing={this.props.toggleIsFollowing}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    isFollowing: getIsFollowing(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  setUserId,
  toggleIsFollowing,
  getUsersStart,
})(UsersContainer);
