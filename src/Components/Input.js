import classes from "./Input.module.css";

function Input(props) {
  return (
      <input
        type="text"
        className={classes.inputBar}
        value={props.value} 
        onChange={props.onChange}
        placeholder={props.pholder}
      ></input>

  );
}

export default Input;
