import React from 'react';
import './Card.scss'
const Card = () => {
  return (
    <div className="card">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" alt="" className="card-image" />
  <div className="card-details">
    <h2>City Lights in New York</h2>
    <h3>The city that never sleeps.</h3>
    <p>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
  </div>

</div>
  );
};

export default Card;