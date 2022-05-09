import classes from "./Message.module.css";
import React from "react";

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

export default Message;
