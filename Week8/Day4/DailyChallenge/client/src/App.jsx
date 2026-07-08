import { Component } from "react";

class App extends Component {
  state = {
    message: "",
    input: "",
    response: "",
  };

  async componentDidMount() {
    const res = await fetch("/api/hello");
    const data = await res.json();

    this.setState({
      message: data.message,
    });
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: this.state.input,
      }),
    });

    const data = await res.json();

    this.setState({
      response: data.message,
      input: "",
    });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Type something..."
          />

          <button type="submit">Send</button>
        </form>

        <h2>{this.state.response}</h2>
      </div>
    );
  }
}

export default App;