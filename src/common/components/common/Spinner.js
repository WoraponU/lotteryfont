import React from 'react';

import './Spinner.scss';

const Spinner = ({ width, height}) => {
  return (
    <svg className="spinner" width={width} height={height} viewBox="0 0 66 66">
      <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
    </svg>    
  );
};

export default Spinner;