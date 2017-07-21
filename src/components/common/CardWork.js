import React from 'react';
// import { Button } from 'react-bootstrap';

import './CardWork.scss' 

const CardWork = ({ img, title, subTittle, content }) => {
  return (
    <div className="cardWork">
      <img src={img} alt="" className="card-image" />
      <div className="card-details">
       
        
        <h2>{title}</h2>
        <div className="post-meta">
        <span>august 08, 2017</span>
      </div>
      </div>
    </div>
  );
};

export default CardWork;