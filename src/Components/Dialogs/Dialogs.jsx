import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { FormsControl } from "../Common/FormsControl/FormsControl";
import { minLength, required } from "../Common/Validation/Validation";

const Dialogs = (props) => {
  console.log("render Dialogs Component")
  let dialogsData = props.dialogsPage.dialogs;
  let messagesData = props.dialogsPage.messages;
  let newMessageText = props.dialogsPage.newMessageText;

  let dialogsDataMapped = dialogsData.map((dialogData) => (
    <DialogItem key={dialogData.id} id={dialogData.id} name={dialogData.name} />
  ));

  let messagesDataMapped = messagesData.map((messageData) => (
    <Message key={messageData.message} message={messageData.message} />
  ));

  if (!props.isAuth) return <Navigate to="/login" />;
  const handleSubmit = (dataForm) => {
    props.sendMessage(dataForm.textMessage);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsDataMapped}</div>
      <div className={classes.messages}>
        <div>{messagesDataMapped}</div>
      </div>
      <AddMessageReduxForm onSubmit={handleSubmit} />
    </div>
  );
};
export const minLength2 = minLength(2);
const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormsControl}
          name={"textMessage"}
          placeholder={"enter tour message"}
          tagName="textarea"
          validate={[required, minLength2]}
        ></Field>
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  );
};
const AddMessageReduxForm = reduxForm({
  form: "addMessage",
})(addMessageForm);

export default Dialogs;
