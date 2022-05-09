import React, { useEffect, useState } from "react";
import classes from "./ProfileStatus.module.css";
const ProfileStatus =props=> {
  let [editMode,setEditMode] = useState(false);
  let [status,setStatus] = useState(props.status);
  
  useEffect(()=> {
    console.log("render use effect")
    setStatus(props.status)
  }, [props.status])
  
  const startEditMode = () => {
    setEditMode(true)
  };
  const stopEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  };
  const changeStatus = (e) => {
      setStatus(e.target.value)
  };

    return (
      <div className={classes.statusBox}>
        <div>
          {!editMode ? (
            <span
              onDoubleClick={() => {
                startEditMode();
              }}
            >
              {props.status ? props.status : "set new status please"}
            </span>
          ) : (
            <input
              autoFocus
              onInput={changeStatus}
              onBlur={() => {
                stopEditMode();
              }}
              value={status}
            />
          )}
        </div>
      </div>
    );
  
}

export default ProfileStatus;
