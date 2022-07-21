import React, { Children, Component } from 'react';

class DrinkList extends Component{


  render(){
    return(
      <>
      <Drink>{Children}</Drink>
      <h5>hii I am drinkList</h5>
      </>
    )
  }
}


export default DrinkList;