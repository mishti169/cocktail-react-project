import React, { Component } from "react";
import "./Drink.css";
class Drink extends Component {
  render() {
    const { img, name, info, glass } = this.props;
    return (
      <div className="drink">
        <img src={img} alt="drink" width={260} className="drink-img" />
        <div className="drink-details">
          <span>{name}</span>
          <span>{glass}</span>
          <span>{info}</span>
          <span>DETAILS</span>
        </div>
      </div>
    );
  }
}
export default Drink;
