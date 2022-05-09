import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
    return <Login login={this.props.login} {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { login })(LoginContainer);
