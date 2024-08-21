import React from 'react';
import Button from "./Button";

function BookNow({color, hoverColor}) {
  return (
    <div>
      <a data-testid="linkElement" href="#" target="_self" className="skipper-be-cta">
        <Button label={'Book Now'} color={color} hoverColor={hoverColor}/>
      </a>
      <hr/>
      <div>
        <button className="primary-btn skipper-be-cta">Book Now</button>
      </div>
      <hr/>
      <div>
        <a data-testid="linkElement" href="https://www.irishotelboston.com/rooms" target="_self"
           className="Y3Mib0">Rooms</a>
      </div>
      <hr/>
      <div>
        <a data-testid="linkElement" href="?sbe_internalLink" target="_self" className="Y3Mib0">Rooms</a>
      </div>
      <hr/>
      <div>
        <a data-testid="linkElement" href="#" target="_self" className="skipper-be-cta">Rooms</a>
      </div>
    </div>


  );
}

export default BookNow;