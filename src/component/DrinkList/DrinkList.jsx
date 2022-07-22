import React, { Component } from "react";
import { DrinkContext } from "../../App";
import Drink from "../Drink/Drink";
import "./DrinkList.css";
class DrinkList extends Component {
  getDrinks = (arr) => {
    return arr.map((currItem) => {
      return (
        <Drink
          name={currItem.strDrink}
          img={currItem.strDrinkThumb}
          glass={currItem.strGlass}
          info={currItem.strAlcoholic}
          key={currItem.idDrink}
        />
      );
    });
  };
  render() {
    return (
      <DrinkContext.Consumer>
        {(arr) => {
          return (
            <div className="drink-list-container">
              <div className="drink-list">{this.getDrinks(arr)}</div>
            </div>
          );
        }}
      </DrinkContext.Consumer>
    );
  }
}

export default DrinkList;
