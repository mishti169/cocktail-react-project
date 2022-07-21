import React, { Component } from "react";

class Search extends Component {
  state = {
    inputVal: "",
  };

  onChange = (e) => {
    // console.log("clicked", e.target.value);
    this.setState({ inputVal: e.target.value });
  };
  render() {
    return (
      <div>
        <p>Search Your Favorite Cocktail</p>
        <form>
          <input
            type="search"
            onChange={this.onChange}
            value={this.state.inputVal}
          />
        </form>
      </div>
    );
  }
}
export default Search;
