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
          {props.pageData.work_place === "sairme_office" ? (
            <input
              type="radio"
              id="sairme_office"
              name="work"
              value="sairme_office"
              checked
            />
          ) : (
            <input
              type="radio"
              id="sairme_office"
              name="work"
              value="sairme_office"
            />
          )}

          <label htmlFor="sairme_office">From Sairme Office</label>
        </div>
        <div>
          {props.pageData.work_place === "home" ? (
            <input type="radio" id="home" name="work" value="home" checked />
          ) : (
            <input type="radio" id="home" name="work" value="home" />
          )}

          <label htmlFor="home">From Home</label>
        </div>
        <div>
          {props.pageData.work_place === "hybrid" ? (
            <input
              type="radio"
              id="hybrid"
              name="work"
              value="hybrid"
              checked
            />
          ) : (
            <input type="radio" id="hybrid" name="work" value="hybrid" />
          )}

          <label htmlFor="hybrid">Hybrid</label>
        </div>
        <p>Did you contact covid 19? :{"("}</p>
        <div>
          {props.pageData.hadCovid === "true" ? (
            <input type="radio" id="yes" name="hadCovid" checked value={true} />
          ) : (
            <input type="radio" id="yes" name="hadCovid" value={true} />
          )}

          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          {props.pageData.hadCovid === "false" ? (
            <input type="radio" id="no" name="hadCovid" checked value={false} />
          ) : (
            <input type="radio" id="no" name="hadCovid" value={false} />
          )}

          <label htmlFor="no">No</label>
        </div>
        {props.pageData.hadCovid === "true" ? (
          <div>
            <p>When?</p>
            <input
              type="date"
              name="whenCovid"
              value={props.pageData.when_had_covid}
            />
          </div>
        ) : null}

        <p>Have you been vaccinated?</p>
        <div>
          {props.pageData.vaccinated === "true" ? (
            <input
              type="radio"
              id="vaccineYes"
              name="vaccine"
              checked
              value={true}
            />
          ) : (
            <input type="radio" id="vaccineYes" name="vaccine" value={true} />
          )}

          <label htmlFor="vaccineYes">Yes</label>
        </div>
        <div>
          {props.pageData.vaccinated === "false" ? (
            <input
              type="radio"
              id="vaccineNo"
              name="vaccine"
              value="no"
              checked
            />
          ) : (
            <input type="radio" id="vaccineNo" name="vaccine" value="no" />
          )}

          <label htmlFor="vaccineNo">No</label>
        </div>
        {props.pageData.vaccinated === "true" ? (
          <div>
            <p>When did you get your last covid vaccine?</p>
            <input
              type="date"
              name="whenVaccine"
              value={props.pageData.when_vaccinated}
            />
          </div>
        ) : null}
      </form>
    </Page>
  );
};

export default Covid;
