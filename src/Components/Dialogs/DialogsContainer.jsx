import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

let DialogsContainer = connect(mapStateToProps, { sendMessage })(Dialogs);

export default DialogsContainer;
