import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);
  // console.log('render',{ searchField });

  //here it is only called during the mount phase
  //as the it has empty array []
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  // here filterd monsters are trigerred only if search field/ monsters data changes
  useEffect(() => {
    // console.log(`inside useEffect for setFilteredMonsters`);
    const newFilteredMonsters = monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  // create a named fn for optimization
  // this a callback via searchbox
  const onSearchChange = (event) => {
    const searchFieldValue = event.target.value.toLocaleLowerCase();
    // console.log(`inside onSearchChange ${searchFieldValue}`);

    // set & trigger render
    // here we're just updating the search text & let render handle the UI update
    setSearchField(searchFieldValue);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="find monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
