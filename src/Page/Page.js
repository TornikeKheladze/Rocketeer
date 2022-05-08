import React from "react";
import "./Page.css";
const Page = (props) => {
  return (
    <div className="Page" id={props.id}>
      <div className="left">{props.children}</div>
      <div className="right">
        <header>
          <h1>{props.header}</h1>
        </header>
        <p id="page-p">{props.content}</p>
      </div>
    </div>
  );
};

export default Page;
