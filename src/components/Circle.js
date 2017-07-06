import React from 'react';
import styles from './Circle.scss'
import classNames from 'classnames'

const Circle = ({ color,width }) => {

  const Cpi = classNames(styles[`${color}`],styles[`${width}`]);
  console.log(color,width)

  return (
    <div className={Cpi}>    {/*<div className={styles[`${color}`]}>*/}</div>
     
    
  );
};

export default Circle;