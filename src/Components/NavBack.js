import React from 'react';
import exitdoor from '../images/exitdoor.svg';

let NavBack = () => {

  const style = { //we can get rid of this and the style attribute in the img tag once we do real CSS styling later
    height: "24px",
    width: "20px"
  }

    return (
      <div className="NavBack">
          <img src={exitdoor} className="exit-door" alt="back" style={style}/>
      </div>
    )
  }

export default NavBack;
