// Code Keypad Component Here
import React from "react";

const onKeyUpHandler = () => console.log("Entering password...");

const Keypad = () => {
  return <input type="password" onKeyUp={onKeyUpHandler} />;
};

export default Keypad;
