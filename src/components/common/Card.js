import React from 'react';
import { Button } from 'react-bootstrap';

import './Card.scss' 

const Card = ({ img, title, subTittle, content, read }) => {
  return (
    <div className="cardHome">
      <img src={img} alt="" className="card-image" />
      <div className="card-details">
        <h3>{subTittle}</h3>
        <h2>{title}</h2>
        <hr/>
        <p>{content}</p>
        <div className="post-meta">
          <Button className="btn-white mt10">{read} <i className="fa fa-angle-right" aria-hidden="true"></i></Button>
      </div>
      </div>
    </div>
  );
};

export default Card;