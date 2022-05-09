import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
  setUserDataAction,
  toggleIsLoading,
  authMe,
  logout,
} from "../../redux/authReducer";
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} logout={this.props.logout} />;
  }
}
const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth, isLoading: state.auth.isLoading };
};
export default connect(mapStateToProps, {
  setUserDataAction,
  toggleIsLoading,
  authMe,
  logout,
})(HeaderContainer);
