import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {
            favoriteColor: "red",
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                favoriteColor: "yellow",
            });
        }, 1000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");

        return null;
    }

    componentDidUpdate() {
        console.log("after update");
    }

    render() {
        return (
            <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        );
    }
}

export default App;