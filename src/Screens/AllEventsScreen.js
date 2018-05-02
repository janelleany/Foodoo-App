import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import shoppingListIcon from '../images/shopping-list-icon.svg';
import Header from '../Components/Header';

let mapPropsToState = (state) => {
  return {allEvents: state.eventsList}
}

let AllEventsScreen = ({allEvents}) => {
  return (
      <div className="AllEvents-container">
        <header>
          <Header />
        </header>
        <p>The Banner Component will go here</p>
        <div>
          {
            allEvents.map(event => {
              return (
                <div key={event.eventid}>   
                  <p>{event.eventTitle}</p>
                  <p>{event.Date}</p>
                <div>
                    <Link to="/shoppinglist"> 
                      <img src={shoppingListIcon} className="shopping-list-icon" alt="shoppingListIcon" />
                    </Link>
                    <p>{event.mealType}</p>
                    <p>{event.eventSize}</p>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    );
  }

export default connect(mapPropsToState)(AllEventsScreen);
