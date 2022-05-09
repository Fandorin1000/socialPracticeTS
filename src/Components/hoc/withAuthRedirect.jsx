import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class withAuthRedirectClassComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;
      return <Component {...this.props} />;
    }
  }
  let withAuthRedirectConnectedComponent = connect(mapStateToProps)(
    withAuthRedirectClassComponent
  );
  return withAuthRedirectConnectedComponent;
};
