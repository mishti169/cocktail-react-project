import React, { Component } from "react";
import "./Drink.css";
class Drink extends Component {
  render() {
    return (
      <div className="drink">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg"
          alt="drink"
          width={260}
        />
        <div className="drink-details">
          <span>Casino</span>
          <span>Cocktail glass</span>
          <span>Alcoholic</span>
          <span>DETAILS</span>
        </div>
      </div>
    );
  }
}
export default Drink;
