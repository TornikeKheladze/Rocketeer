import React from "react";
import "./Langing.css";
const Langing = (props) => {
  return (
    <div className="Langing">
      <h1>WELCOME ROCKETEER!</h1>
      <button onClick={props.click}>Start Questionnaire</button>
      <p onClick={props.submitedApp}>Submitted Applications</p>
      <img
        src="https://s3-alpha-sig.figma.com/img/6be7/91d1/6f7c4615d45526a5f978b2a74856f6b3?Expires=1652659200&Signature=ebn2Oc6j8CQ7k5~Nq55zwkWUvVnlRxe26JxpsV-dgVantE-hhA2gUC-hnOseD9nWjTlL2QyMw9nHrwxjvyi-YIgZGaINoj11qSfz713aUKfn0bOtQHDzYWTH3ipHkZVc0NZtIjzoe9L89jOiqDrZfL1XDnfAxwVm~62GX-8Nij9ymDdF~JPaBmzzV8qT8T6S6HBK9ikunLW89nhqUn0O6vsI3LweJpvdp1L5aMcKwquUO4GttFLbNMPDd~kS74cJ7527nbU0GKOZWbSaram5zMXOxXq78r~Nz~IrqRAq58Kwu-7Urn8UEyw3k8IpK7k5RCu5IShZAOkDJNpBgihM1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="astronaut"
      />
    </div>
  );
};

export default Langing;
