import React from "react";
import Page from "../Page/Page";
import "./RedberrianInsights.css";

const RedberrianInsights = (props) => {
  return (
    <Page
      header={"Redberrian Insights"}
      content={
        "We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!"
      }
    >
      <h1>What about you?</h1>
      <form className="r_i_form" onChange={props.formChange}>
        <p>Would you attend Devtalks and maybe also organize your own?</p>
        <div>
          <input type="radio" id="yes" name="devTalk" value="yes" />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input type="radio" id="no" name="devTalk" value="no" />
          <label htmlFor="no">No</label>
        </div>
        <p>What would you speak about at Devtalk?</p>
        <textarea
          rows={5}
          cols={18}
          placeholder="I would..."
          name="speak"
        ></textarea>
        <p>Tell us something special</p>
        <textarea rows={3} cols={18} name="special"></textarea>
      </form>
    </Page>
  );
};

export default RedberrianInsights;
