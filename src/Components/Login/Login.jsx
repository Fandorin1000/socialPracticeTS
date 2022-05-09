import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { FormsControl } from "../Common/FormsControl/FormsControl";
import { minLength, required } from "../Common/Validation/Validation";
import classes from "./Login.module.css";

const minLength2 = minLength(2);
const LoginForm = (props) => {
  let { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"enter login please"}
          component={FormsControl}
          name={"email"}
          tagName="input"
          type={"email"}
          validate={[required, minLength2]}
        />
      </div>
      <div>
        <Field
          placeholder={"enter password please"}
          component={FormsControl}
          name={"password"}
          tagName="input"
          type={"password"}
          validate={[required, minLength2]}
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
        remember me
      </div>
      {props.error && (
        <div className={classes.mainError}>
          <span>{props.error}</span>
        </div>
      )}
      <div>
        <button type={"submit"} disabled={props.isLoading}>
          {props.isLoading ? "loading..." : "submit"}
        </button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
const Login = (props) => {
  const handleSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div className={classes.formBox}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={handleSubmit} isLoading={props.isLoading} />
    </div>
  );
};

export default Login;
