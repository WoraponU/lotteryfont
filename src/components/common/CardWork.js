import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './CardWork.scss' 

const CardWork = ({ img, title, subTittle, content, match: { params: { lang: paramLang } } }) => {
  return (
    <div className="cardWork"> 
      <Link to={`/${paramLang}/our-work/1`}>

      <img src={img} alt="" className="card-image" />
      <div className="card-details">
       
        
        <h2>{title}</h2>
        <div className="post-meta">
        <span>august 08, 2017</span>
      </div>
      </div>
      </Link>
    </div>
  );
};

export default withRouter( CardWork );