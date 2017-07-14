import React from 'react';
import { Button } from 'react-bootstrap';
import './Card.scss'
const Card = ({img, h2, h3, p}) => {
  return (
    <div className="card">
      <img src={img} alt="" className="card-image" />
      <div className="card-details">
        <h3>{h3}</h3>
        <h2>{h2}</h2>
        <hr/>
        <p>{p}</p>
        <div className="post-meta">
          <Button bsStyle="default">Read ></Button>
      </div>
      </div>
    </div>

   
    
  );
};

export default Card;