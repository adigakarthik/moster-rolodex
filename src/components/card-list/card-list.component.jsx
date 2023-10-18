import { Component } from "react";

class CardList extends Component {
  render() {
    // console.log(this.props);
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((m) => {
          return <h1 key={m.id}>{m.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;