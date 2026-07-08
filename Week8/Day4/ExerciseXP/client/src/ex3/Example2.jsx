import React, { Component } from "react";
import data from "./data.json";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>

        {Object.entries(data.Skills).map(([category, skills]) => (
          <div key={category}>
            <h3>{category}</h3>

            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;