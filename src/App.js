import React, { Component } from "react";
import "./App.css";
import Buttons from "./Buttons/Buttons";
import Covid from "./Gverdebi/Covid";
import Langing from "./Gverdebi/Langing";
import PersonalInformation from "./Gverdebi/PersonalInformation";
import RedberrianInsights from "./Gverdebi/RedberrianInsights";
import TechnicalSkillnet from "./Gverdebi/TechnicalSkillnet";
import Submit from "./Gverdebi/Submit";
import Thanks from "./Gverdebi/Thanks";
import SubmitedApp from "./Gverdebi/SubmitedApp";
import axios from "axios";

class App extends Component {
  state = {
    pageId: 0,
    skills: [],
    chosenSkill: null,
    years: null,
    technicalSkillnetData: [],
    personalInformationData: {
      firstName: "",
      lastName: "",
      Email: "",
      num: "",
    },
    CovidPageData: { hadCovid: null, vaccinated: null },
    redberrianInsightsData: {},
    data: { skills: [] },
  };

  buttonClickHandler = (e) => {
    if (e.target.type === "submit") {
      const id = Number(e.target.innerText);
      this.setState({ pageId: id });
    }
  };
  startBtnHandler = () => {
    this.setState({ pageId: 1 });
  };
  prevNextHandler = (e) => {
    const currentId = this.state.pageId;
    if (e.target.innerText === "prev") {
      this.setState({ pageId: currentId - 1 });
    }
    if (e.target.innerText === "next") {
      this.setState({ pageId: currentId + 1 });
    }
  };
  goBackHandler = () => {
    const currentId = this.state.pageId;
    this.setState({ pageId: currentId - 1 });
  };
  submitSubmitHandler = () => {
    const currentId = this.state.pageId;
    this.setState({ pageId: currentId + 1 });
    const data = {
      token: "df80581e-1deb-4241-8a0d-332490119d98",
      first_name: this.state.personalInformationData.firstName,
      last_name: this.state.personalInformationData.lastName,
      email: this.state.personalInformationData.Email,
      phone: this.state.personalInformationData.num,
      skills: this.state.technicalSkillnetData,
      work_preference: this.state.CovidPageData.work_place,
      had_covid: this.state.CovidPageData.hadCovid,
      had_covid_at: this.state.CovidPageData.when_had_covid,
      vaccinated: this.state.CovidPageData.vaccinated,
      vaccinated_at: this.state.CovidPageData.when_vaccinated,
      will_organize_devtalk: this.state.redberrianInsightsData.attendDevtalk,
      devtalk_topic: this.state.redberrianInsightsData.speakAbout,
      something_special: this.state.redberrianInsightsData.somethingSpecial,
    };

    // axios
    //   .post("https://bootcamp-2022.devtest.ge/api/application", data)
    //   .then((res) => {
    //     console.log(res);
    //   });

    console.log(data);
    setTimeout(() => {
      this.setState({
        pageId: 0,
        chosenSkill: null,
        years: null,
        technicalSkillnetData: [],
        personalInformationData: {
          firstName: "",
          lastName: "",
          Email: "",
          num: "",
        },
        CovidPageData: { hadCovid: null, vaccinated: null },
        redberrianInsightsData: {},
        data: data,
      });
    }, 3000);
  };
  /////////////PersonalInformation
  onFormChanged = (e) => {
    if (e.target.placeholder === "First Name") {
      this.setState({
        personalInformationData: {
          ...this.state.personalInformationData,
          firstName: e.target.value,
        },
      });
    }
    if (e.target.placeholder === "Last Name") {
      this.setState({
        personalInformationData: {
          ...this.state.personalInformationData,
          lastName: e.target.value,
        },
      });
    }
    if (e.target.placeholder === "E-mail") {
      this.setState({
        personalInformationData: {
          ...this.state.personalInformationData,
          Email: e.target.value,
        },
      });
    }
    if (e.target.placeholder === "+995") {
      this.setState({
        personalInformationData: {
          ...this.state.personalInformationData,
          num: e.target.value,
        },
      });
    }
  }; /////////////PersonalInformation

  /////////////TechnicalSkillnet
  componentDidMount() {
    axios.get("https://bootcamp-2022.devtest.ge/api/skills").then((x) => {
      this.setState({ skills: x.data });
    });
  }
  onAddSkillClick = (e) => {
    e.preventDefault();
    const currentSkill = this.state.chosenSkill;
    const years = this.state.years;
    this.setState({
      technicalSkillnetData: [
        ...this.state.technicalSkillnetData,
        { skill: currentSkill, years: years },
      ],
    });
  };
  onDropdownChange = (e) => {
    const skill = e.target.value;
    this.setState({ chosenSkill: skill });
  };
  onInputChange = (e) => {
    const year = e.target.value;
    this.setState({ years: year });
  };
  skillDeleteHandler = (e) => {
    e.preventDefault();
    const id = Number(e.target.id);
    const data = this.state.technicalSkillnetData.filter((x, i) => {
      return i !== id ? x : null;
    });
    this.setState({ technicalSkillnetData: data });
  }; ////////////TechnicalSkillnet

  //////////////////Covid
  onCovidFormChanged = (e) => {
    if (e.target.name === "work") {
      this.setState({
        CovidPageData: {
          ...this.state.CovidPageData,
          work_place: e.target.value,
        },
      });
    }
    if (e.target.name === "hadCovid") {
      this.setState({
        CovidPageData: {
          ...this.state.CovidPageData,
          hadCovid: e.target.value,
        },
      });
    }
    if (e.target.name === "vaccine") {
      this.setState({
        CovidPageData: {
          ...this.state.CovidPageData,
          vaccinated: e.target.value,
        },
      });
    }
    if (e.target.name === "whenCovid") {
      this.setState({
        CovidPageData: {
          ...this.state.CovidPageData,
          when_had_covid: e.target.value,
        },
      });
    }
    if (e.target.name === "whenVaccine") {
      this.setState({
        CovidPageData: {
          ...this.state.CovidPageData,
          when_vaccinated: e.target.value,
        },
      });
    }
  }; /////////////////////Covid
  ////////////////RedberrianInsights
  onRedberrianFormChange = (e) => {
    if (e.target.name === "devTalk") {
      this.setState({
        redberrianInsightsData: {
          ...this.state.redberrianInsightsData,
          attendDevtalk: e.target.value,
        },
      });
    }
    if (e.target.name === "speak") {
      this.setState({
        redberrianInsightsData: {
          ...this.state.redberrianInsightsData,
          speakAbout: e.target.value,
        },
      });
    }
    if (e.target.name === "special") {
      this.setState({
        redberrianInsightsData: {
          ...this.state.redberrianInsightsData,
          somethingSpecial: e.target.value,
        },
      });
    }
  };
  showSubmitedApp = () => {
    this.setState({ pageId: 7 });
  };

  render() {
    let pages = [
      <Langing
        click={this.startBtnHandler}
        submitedApp={this.showSubmitedApp}
      />,
      <PersonalInformation
        values={this.state.personalInformationData}
        change={this.onFormChanged}
      />,
      <TechnicalSkillnet
        dropdown={this.onDropdownChange}
        addSkill={this.onAddSkillClick}
        inputChange={this.onInputChange}
        skills={this.state.skills}
        data={this.state.technicalSkillnetData}
        skillDelete={this.skillDeleteHandler}
      />,
      <Covid
        formChange={this.onCovidFormChanged}
        pageData={this.state.CovidPageData}
      />,
      <RedberrianInsights
        pageData={this.state.redberrianInsightsData}
        formChange={this.onRedberrianFormChange}
      />,
      <Submit click={this.goBackHandler} submit={this.submitSubmitHandler} />,
      <Thanks />,
      <SubmitedApp data={this.state.data} />,
    ];
    let button = null;
    if (
      this.state.pageId !== 0 &&
      this.state.pageId !== 5 &&
      this.state.pageId !== 6 &&
      this.state.pageId !== 7
    ) {
      button = (
        <Buttons
          buttonId={this.state.pageId}
          click={this.buttonClickHandler}
          prevNext={this.prevNextHandler}
        />
      );
    }
    return (
      <div className="App">
        {pages[this.state.pageId]}
        {/* {pages[7]} */}
        {button}
      </div>
    );
  }
}

export default App;
