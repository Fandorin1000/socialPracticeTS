import React from "react";
import preloader from "../../../assets/images/spinner.gif";
import classes from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div className={classes.PreloaderBox}>
      <img src={preloader} alt="spinner" />
    </div>
  );
};
export default Preloader;
