import React from "react";
import "./Submit.css";
const Submit = (props) => {
  return (
    <div className="Submit">
      <button onClick={props.submit}>Submit</button>
      <p onClick={props.click}>go back</p>
    </div>
  );
};

export default Submit;
