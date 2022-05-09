import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { initializeStart } from "./redux/appReducer";
import Preloader from "./Components/Common/Preloader/Preloader";

const DialogsContainer = lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("./Components/Profile/ProfileContainer")
);
const UsersContainer = lazy(() => import("./Components/Users/UsersContainer"));
const LoginContainer = lazy(() => import("./Components/Login/LoginContainer"));
class App extends React.Component {
  componentDidMount() {
    this.props.initializeStart();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route element={<DialogsContainer />} path="/dialogs/" />
              <Route element={<ProfileContainer />} path={"/profile/:userId"} />
              <Route element={<ProfileContainer />} path={"/profile/"} />
              <Route element={<UsersContainer />} path="/users/" />
              <Route element={<LoginContainer />} path="/login" />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.appPage.initialized,
});
export default connect(mapStateToProps, { initializeStart })(App);
