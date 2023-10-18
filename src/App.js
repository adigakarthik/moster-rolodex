import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from './components/card-list/card-list.component';

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
    this.loadData()
  }

  //Call the 3rd party api data
  loadData = () =>{
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

  // create a named fn for optimization
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    console.log(searchField);

    // set & trigger render
    // here we're just updating the search text & let render handle the UI update
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // casting variables for readability
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // this is to leverage the filter than the orig data set
    const filteredMonsters = monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />        
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
