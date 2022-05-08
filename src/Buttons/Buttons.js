import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  const buttonsArr = [1, 2, 3, 4, 5];
  return (
    <div className="Buttons" onClick={props.prevNext}>
      <button>prev</button>
      <div onClick={props.click} className="inside">
        {buttonsArr.map((x, i) => {
          if (props.buttonId > i) {
            return (
              <button
                key={i}
                style={{
                  backgroundColor: "rgba(254, 59, 31, 1)",
                  color: "rgba(254, 59, 31, 1)",
                }}
              >
                {x}
              </button>
            );
          } else {
            return (
              <button key={i} style={{ color: "white" }}>
                {x}
              </button>
            );
          }
        })}
      </div>
      <button>next</button>
    </div>
  );
};

export default Buttons;
