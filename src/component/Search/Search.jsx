import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <p>Search Your Favorite Cocktail</p>
        <form>
          <input
            type="search"
            value={this.props.inputVal}
            onChange={this.props.onChange}
          />
        </form>
      </div>
    );
  }
}
export default Search;
