import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "12er432110",
        },
        {
          name: "Frank",
          id: "12er432111",
        },
        {
          name: "Jacky",
          id: "12er432112",
        },
        {
          name: "Karthik",
          id: "12er432113",
        },
        {
          name: "Krishna",
          id: "12er432114",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((m) => {
          return (
            <div key={m.id}>
              <h1>{m.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
