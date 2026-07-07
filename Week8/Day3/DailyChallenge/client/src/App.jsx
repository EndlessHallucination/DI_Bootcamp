import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      lactoseFree: false,
      nutsFree: false,
      vegan: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    return (
      <FormComponent
        data={this.state}
        handleChange={this.handleChange}
      />
    );
  }
}

export default App;