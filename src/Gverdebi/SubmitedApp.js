import React from "react";
import "./SubmitedApp.css";
const SubmitedApp = ({ data }) => {
  console.log(data);
  return (
    <div className="SubmitedApp">
      <div className="personal">
        <header>Personal information</header>
        <p>
          First Name <strong>{data.first_name}</strong>
        </p>
        <p>
          Last Name <strong>{data.last_name}</strong>
        </p>
        <p>
          Email <strong>{data.email}</strong>
        </p>
        <p>
          Phone <strong>{data.phone}</strong>
        </p>
      </div>
      <div className="skillset">
        <header>Skillset</header>
        {data.skills.map((x, i) => {
          return (
            <p key={i}>
              <strong> {x.skill}</strong>{" "}
              <span>years of experience {x.years} </span>
            </p>
          );
        })}
      </div>
      <div className="covid_sit">
        <header>Covid Situation</header>
        <p>how would you prefer to work?</p>
        <strong>
          {data.work_preference === "sairme_office"
            ? "sairme office"
            : data.work_preference}
        </strong>
        <p>Did you have covid 19?</p>
        {data.had_covid === "true" ? (
          <div>
            <strong>yes</strong>
            <p>When did you have covid 19?</p>
            <strong>{data.had_covid_at}</strong>
          </div>
        ) : (
          <strong>no</strong>
        )}
        <p>Have you been vaccinated?</p>
        {data.vaccinated === "true" ? (
          <div>
            <strong>Yes</strong>
            <p>When did you get covid vaccine?</p>
            <strong>{data.vaccinated_at}</strong>
          </div>
        ) : (
          <strong>No</strong>
        )}
      </div>
      <div>
        <header>Insights</header>
        <br />
        <div>
          Would you attend Devtalks and maybe also organize your own?
          <p>
            {data.will_organize_devtalk === "true" ? (
              <div>
                <strong>yes</strong>
                <p>What would you speak about at Devtalk?</p>
                <strong>about: {data.devtalk_topic}</strong>
              </div>
            ) : (
              <strong>No</strong>
            )}
          </p>
        </div>
        <p>Tell us somthing special</p>
        <strong>{data.something_special}</strong>
      </div>
    </div>
  );
};

export default SubmitedApp;
