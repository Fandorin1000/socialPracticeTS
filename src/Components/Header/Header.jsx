import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.imgBox}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sxMEajyGJtnlUdBiGfOw38rorO5tswHWWQ&usqp=CAU"
          alt="logo"
        />
      </div>
      <div className={classes.authBox}>
        {props.isLoading ? (
          <Preloader />
        ) : (
          <NavLink
            onClick={
              props.isAuth
                ? () => {
                    props.logout();
                  }
                : null
            }
            to="/login"
          >
            {props.isAuth ? "logout" : "login"}
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
