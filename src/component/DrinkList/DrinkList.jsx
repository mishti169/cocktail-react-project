import React, { Component } from "react";
import { DrinkContext } from "../../App";
import Drink from "../Drink/Drink";
class DrinkList extends Component {
  render() {
    return (
      <DrinkContext.Consumer>
        {(arr) => {
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
        }}
      </DrinkContext.Consumer>
    );
  }
}

export default DrinkList;
