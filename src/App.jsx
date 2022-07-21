import React, { Component } from "react";
import Header from "./component/Header/Header";
import Search from "./component/Search/Search";
import { drinks } from "./utils/utils.js";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <h4>hii i am app</h4>
      </>
    );
  }
}

export default App;
