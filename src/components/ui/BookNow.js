import React from 'react';
import Button from "./Button";

function BookNow(props) {
  return (
    <a data-testid="linkElement" href="#" target="_self" className="skipper-be-cta">
      <Button label={'Book Now'}/>
    </a>
  );
}

export default BookNow;