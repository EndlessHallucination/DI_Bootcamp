import React, { Component } from "react";
import data from "./data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>

        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.company}</h3>

            <p>{exp.position}</p>

            <p>{exp.years}</p>

            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;