import React from 'react';
import './CircleClient.scss'

// const { img } = this.props;


const CircleClient = ({ img }) => {
  const circle = {
    backgroundImage: `url(/assets/images/client/${img}.png)`,
  }

  return (
    <div className="circleClient">
      <div className="circle" style={circle}></div>       
    </div>
  );
};

export default CircleClient;