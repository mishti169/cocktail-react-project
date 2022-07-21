import React, { Component, createContext } from "react";
import DrinkList from "./component/DrinkList/DrinkList";
import Header from "./component/Header/Header";
import Search from "./component/Search/Search";
import { drinks } from "./utils/utils.js";

export const DrinkContext = createContext([]);
class App extends Component {
  render() {
    return (
      <DrinkContext.Provider value={drinks}>
        <Header />
        <Search />
        <DrinkList />
      </DrinkContext.Provider>
    );
  }
}

export default App;
