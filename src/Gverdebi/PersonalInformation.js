import React from "react";
import Page from "../Page/Page";
import "./PersonalInformation.css";
const PersonalInformation = (props) => {
  return (
    <Page
      header={"Redberry Origins"}
      content={
        "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇"
      }
    >
      <h1>Hey, Rocketeer, what are your coordinates?</h1>
      <form className="form" onChange={props.change}>
        <input
          type="text"
          placeholder="First Name"
          value={props.values.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={props.values.lastName}
        />
        <input type="email" placeholder="E-mail" value={props.values.Email} />
        <input type="tel" placeholder="+995" value={props.values.num} />
      </form>
    </Page>
  );
};

export default PersonalInformation;
