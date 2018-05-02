import React from 'react';
import { connect } from 'react-redux';

import EventContainer from '../Components/EventContainer';
import NavBack from '../Components/NavBack';
import Header from '../Components/Header';



let mapStateToProps = (state, props) => {
  return {
    allEvents: state.eventsList,
    idOfEventBeingViewed: props.match.params.id
  }
}

let OneEventScreen = ({allEvents, idOfEventBeingViewed}) => {

    return (
      <div className="OneEvent-container">
      <header>
        <Header />
      </header>
        < EventContainer allEvents={allEvents} idOfEventBeingViewed={idOfEventBeingViewed}/>
        < NavBack />
      </div>
    )
}

export default connect(mapStateToProps)(OneEventScreen);
