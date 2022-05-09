import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  let links = [
    { id: 1, to: "/profile", name: "profile" },
    { id: 2, to: "/dialogs", name: "dialogs" },
    { id: 3, to: "/users", name: "users" },
    { id: 4, to: "/news", name: "news" },
    { id: 5, to: "/music", name: "music" },
    { id: 6, to: "/settings", name: "settings" },
  ];
  // className={(navData) =>
  //   navData.isActive ? classes.active : classes.item
  // } таким образом подсвечиваю активну ссылку
  // let links = props.store.navbar.links;
  let linksMapped = links.map((link) => (
    <div className={classes.item} key={link.id}>
      <NavLink
        to={link.to}
        className={(navData) =>
          navData.isActive ? classes.active : classes.item
        }
      >
        {link.name}
      </NavLink>
    </div>
  ));

  return <nav className={classes.nav}>{linksMapped}</nav>;
};

export default Navbar;
