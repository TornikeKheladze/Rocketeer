import React from "react";
import Page from "../Page/Page";
import "./Covid.css";

const Covid = (props) => {
  return (
    <Page
      header={"Redberry Covid Policies"}
      content={
        "As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. "
      }
    >
      <h1 id="covidStuff">Covid Stuff</h1>
      <form className="covidForm" onChange={props.formChange}>
        <p>how would you prefer to work?</p>
        <div>
          <input
            type="radio"
            id="sairme_office"
            name="work"
            value="sairme_office"
          />
          <label htmlFor="sairme_office">From Sairme Office</label>
        </div>
        <div>
          <input type="radio" id="home" name="work" value="home" />
          <label htmlFor="home">From Home</label>
        </div>
        <div>
          <input type="radio" id="hybrid" name="work" value="hybrid" />
          <label htmlFor="hybrid">Hybrid</label>
        </div>
        <p>Did you contact covid 19? :(</p>
        <div>
          <input type="radio" id="yes" name="hadCovid" value="yes" />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input type="radio" id="no" name="hadCovid" value="no" />
          <label htmlFor="no">No</label>
        </div>
        {props.pageData.hadCovid === "yes" ? (
          <div>
            <p>When?</p>
            <input type="date" name="whenCovid" />
          </div>
        ) : null}

        <p>Have you been vaccinated?</p>
        <div>
          <input type="radio" id="vaccineYes" name="vaccine" value="Yes" />
          <label htmlFor="vaccineYes">Yes</label>
        </div>
        <div>
          <input type="radio" id="vaccineNo" name="vaccine" value="no" />
          <label htmlFor="vaccineNo">No</label>
        </div>
        {props.pageData.vaccinated === "Yes" ? (
          <div>
            <p>When did you get your last covid vaccine?</p>
            <input type="date" name="whenVaccine" />
          </div>
        ) : null}
      </form>
    </Page>
  );
};

export default Covid;
