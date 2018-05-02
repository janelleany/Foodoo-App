import React from 'react';


let EventTitle = ({title, date}) => {
    return (
      <div className="EventTitle-container">
        <h2>{title.toUpperCase()}</h2><p>{date}</p>
      </div>
    )
  }

export default EventTitle;
