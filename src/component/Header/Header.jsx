import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

  render(){
    return(
      <div className='header' >
          <div>The CocktailDB</div>
          <div>
            <span>Home</span>
            <span>About</span>
          </div>
      </div>
    )
  }
}
export default Header;