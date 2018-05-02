import React from 'react';

let MenuCard = ({menu}) => {
  let style = {
    fontWeight: 'bold'
  };

    return (
      <div className="MenuCard">
        <h4>MENU</h4>
        <p style={style}>Appetizer</p>
        <p>{menu.appetizer}</p>
        <p style={style}>Main</p>
        <p>{menu.main}</p>
        <p style={style}>Dessert</p>
        <p>{menu.dessert}</p>
        <p style={style}>Signature Drink</p>
        <p>{menu.drink}</p>
      </div>
    )
  }

export default MenuCard;
