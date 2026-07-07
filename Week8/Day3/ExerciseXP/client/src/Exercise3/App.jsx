import React, { Component } from "react";

class Child extends Component {
    componentWillUnmount() {
        alert("The component named Child is about to be unmounted.");
    }

    render() {
        return <h1>Hello World!</h1>;
    }
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            favoriteColor: "red",
            show: true,
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

    deleteChild = () => {
        this.setState({
            show: false,
        });
    };

    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>

                {this.state.show && <Child />}

                <button onClick={this.deleteChild}>
                    Delete
                </button>
            </div>
        );
    }
}

export default App;