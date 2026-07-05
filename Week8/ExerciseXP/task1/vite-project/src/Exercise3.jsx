import React, { Component } from "react";
import "./Exercise.css";

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div>
        <h1 style={style_header}>This is a Header</h1>

        <p className="para">This is a paragraph with external CSS styling.</p>

        <a href="https://react.dev">React Website</a>

        <br />
        <br />

        <form>
          <label>Name:</label>
          <br />
          <input type="text" placeholder="Enter your name" />
        </form>

        <br />

        <img
          src="https://react.dev/images/og-home.png"
          alt="React"
          width="250"
        />

        <h3>My List</h3>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
