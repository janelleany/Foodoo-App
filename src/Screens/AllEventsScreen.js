import React from 'react';

import { connect } from 'react-redux';

import shoppingListIcon from '../images/shopping-list-icon.svg';

import Header from '../Components/Header';

let mapPropsToState = (state) => {
  return {allEvents: state.eventsList}
}

let AllEventsScreen = ({allEvents}) => {

  const style = { //we can get rid of this and the style attribute in the img tag once we do real CSS styling later
    height: "36px",
    width: "33px"
  }

  return (
      <div className="AllEvents-container">
        <header>
          <Header />
        </header>
        <div>
          {
            allEvents.map(event => {
              return (
                <div>
                  <p>{event.eventTitle}</p>
                  <p>{event.Date}</p>
                  <div>
                    <p>{event.mealType}</p>
                    <p>{event.eventSize}</p>
                    <img src={shoppingListIcon} alt="shopping-list-icon" style={style}/>
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
