import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
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
          },
          () => {
            // this is a callback once state is set
            console.log("Api data loaded to state");
          }
        )
      );
  }

  render() {
    // this is to leverage the filter than the orig data set
    const filteredMonsters = this.state.monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            console.log(searchField);

            // set & trigger render
            // here we're just updating the search text & let render handle the UI update
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((m) => {
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
