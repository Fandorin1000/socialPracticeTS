import classes from "./FormsControl.module.css";

export const FormsControl = ({ input, meta, tagName, ...props }) => {

  return (
    <div className={classes.formsControl}>
      {tagName === "input" ? (
        <input {...meta} {...input} {...props} />
      ) : tagName === "textarea" ? (
        <textarea {...meta} {...input} {...props}></textarea>
      ) : null}
      {meta.touched && meta.error ? (
        <div className={classes.errorBox}>
          <span>{meta.error}</span>
        </div>
      ) : null}
    </div>
  );
};
