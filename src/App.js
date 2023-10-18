import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  // this is used to load the api data while component is created very first time
  // good place to do network requests
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
          return { monsters: users };
          },()=>{
            // this is a callback once state is set
            console.log('Api data loaded to state')
          }
        )
      );
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
