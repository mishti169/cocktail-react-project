import React, { Component, createContext } from "react";
import DrinkList from "./component/DrinkList/DrinkList";
import Header from "./component/Header/Header";
import Search from "./component/Search/Search";
import { drinks } from "./utils/utils.js";

export const DrinkContext = createContext([]);

class App extends Component {
  state = {
    drinkList: drinks,
    inputVal: "",
  };

  onChange = (e) => {
    this.setState({ inputVal: e.target.value });
    const finalDrinks = drinks.filter((currItem) => {
      const searchVal = e.target.value.toLowerCase();
      const currDrink = currItem.strDrink.toLowerCase();
      return currDrink.includes(searchVal);
    });
    return this.setState({ drinkList: finalDrinks });
  };
  render() {
    return (
      <DrinkContext.Provider value={this.state.drinkList}>
        <Header />
        <Search inputVal={this.state.inputVal} onChange={this.onChange} />
        <DrinkList />
      </DrinkContext.Provider>
    );
  }
}

export default App;
