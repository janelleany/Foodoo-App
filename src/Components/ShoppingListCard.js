import React from 'react';


let ShoppingListCard = ({shoppingList}) => {
    return (
      <div className="ShoppingListCard">
        <h4>SHOPPING LIST</h4>
        <ul>
          {
            shoppingList.map(item => {
              return (
                <li><span>{item.quantity} </span><span>{item.unit} of </span><span>{item.item}</span></li>
              );
            })
          }
        </ul>
      </div>
    )
  }

export default ShoppingListCard;
