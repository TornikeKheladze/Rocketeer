import React, { Component } from "react";
import Page from "../Page/Page";
import "./TechnicalSkillnet.css";

class TechnicalSkillnet extends Component {
  render() {
    return (
      <Page
        header={"A bit about our battles"}
        content={
          "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry."
        }
      >
        <h1 id="h1">Tell us about your skills</h1>
        <form className="form">
          <select name="skills" required onChange={this.props.dropdown}>
            {this.props.skills.map((x) => {
              return (
                <option value={x.title} key={x.id}>
                  {x.title}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            onChange={this.props.inputChange}
            placeholder="Experience Duration in Years"
          />
          <button className="button" onClick={this.props.addSkill}>
            Add Programming Language
          </button>
          {this.props.data.map((x, i) => {
            return x.skill && x.years ? (
              <div className="skillDiv" key={i}>
                <p>
                  {x.skill} : {x.years} years of Experience
                </p>
                <button id={i} onClick={this.props.skillDelete}>
                  -
                </button>
              </div>
            ) : null;
          })}
        </form>
      </Page>
    );
  }
}

export default TechnicalSkillnet;
