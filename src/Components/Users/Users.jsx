import React from "react";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/userIcon.webp";
import classes from "./Users.module.css";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.users}>
      <div className={classes.usersBtns}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              onClick={(e) => props.onPageChanged(p)}
              className={
                props.currentPage === p
                  ? classes.selectedPage
                  : classes.pageNumber
              }
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id * Math.random()}>
          <span>
            <div>
              <div className={classes.userIconBox}>
                <NavLink
                  to={`/profile/${u.id}`}
                  onClick={() => {
                    props.setUserId(u.id);
                  }}
                >
                  <img alt="avatar" src={u.photos.small || userIcon} />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.isFollowing.some((id) => id === u.id)}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.isFollowing.some((id) => id === u.id)}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.sity"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
