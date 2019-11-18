// Code EyesOnMe Component Here
import React from "react";

const onFocusHandler = () => console.log("Good!");
const onBlurHandler = () => console.log("Hey! Eyes on me!");

const EyesOnMe = () => {
  return <button onFocus={onFocusHandler} onBlur={onBlurHandler}></button>;
};

export default EyesOnMe;
