import React from 'react';

import EventTitle from './EventTitle';
import EventDescription from './EventDescription';
import EventMetadata from './EventMetadata';

let EventContainer = ({allEvents, idOfEventBeingViewed}) => {
    let arr = allEvents.filter(event => event.eventid === idOfEventBeingViewed);
    let eventToDisplay = arr[0]; //how can I refactor this foolishness?
    return (
      <div className="EventContainer">
        < EventTitle title={eventToDisplay.eventTitle} date={eventToDisplay.eventDate}/>
        < EventDescription description={eventToDisplay.eventDescription}/>
        < EventMetadata 
          size={eventToDisplay.eventSize} 
          type={eventToDisplay.eventType} 
          meal={eventToDisplay.mealType} 
          client={eventToDisplay.clientName}
          menu={eventToDisplay.menu}
          shoppingList={eventToDisplay.shoppingList}
        />
      </div>
    )
  }

export default EventContainer;
