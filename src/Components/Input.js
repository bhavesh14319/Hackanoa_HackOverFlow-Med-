import classes from "./Input.module.css";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        className={classes.inputBar}
        placeholder={props.pholder}
      ></input>
    </div>
  );
}

export default Input;
