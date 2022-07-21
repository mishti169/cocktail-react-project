import React, { Component, createContext } from "react";
import DrinkList from "./component/DrinkList/DrinkList";
import Header from "./component/Header/Header";
import Search from "./component/Search/Search";
import { drinks } from "./utils/utils.js";

export const DrinkContext = createContext([]);

// let cocktail = drinks;
class App extends Component {
  state = {
    drinkList: drinks,
  };

  render() {
    return (
      <DrinkContext.Provider value={this.state.drinkList}>
        <Header />
        <Search />
        <DrinkList />
        {/* // [{}, {}, {}] -> [{}] 
        // ans =  this.state.drinkList.filter() -> this.setState({ drinkList: ans }) */}
      </DrinkContext.Provider>
    );
  }
}

export default App;
