import React from 'react';

import EventSize from '../Components/EventSize';
import EventType from '../Components/EventType';
import MealType from '../Components/MealType';
import ClientName from '../Components/ClientName';
import MenuCard from '../Components/MenuCard';
import ShoppingListCard from '../Components/ShoppingListCard';

let EventMetadata = ({size, type, meal, client, menu, shoppingList}) => {
    return (
      <div className="EventMetadata">
        < EventSize size={size}/>
        < EventType type={type}/>
        < MealType meal={meal}/>
        < ClientName client={client}/>
        < MenuCard menu={menu}/>
        < ShoppingListCard shoppingList={shoppingList}/>
      </div>
    )
  }

export default EventMetadata;
