import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    // console.log('CardList render');
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((m) => {
          return <Card monster={m} />;
        })}
      </div>
    );
  }
}

export default CardList;
