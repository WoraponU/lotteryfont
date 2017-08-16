import React from 'react';
import { Image, Col } from 'react-bootstrap';
import './CardTeam.scss'

const CardTeam = ({ img, title, name, rank}) => {
  return (
    <Col lg={3} md={3} sm={4} className="cardTeam">
      <Image src={img}></Image>
      <div className="groupTitle">
        <p>{title}</p>
        <h5>{name}</h5>
        <h5>{rank}</h5>
      </div>
    </Col> 
  );
};

export default CardTeam;