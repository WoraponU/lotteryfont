import React from 'react';
import styles from './Home.scss'
import classNames from 'classnames'


const Headerhome = () => {
  let Cpi = classNames(styles.circlepink,styles.hed);
  let Cpu = classNames(styles.circlepurple,styles.hedpurple);
  let Cb = classNames(styles.circleblue,styles.hedblue);
  let Cy = classNames(styles.circleyellow,styles.hedyellow);

  return (
    <div className="container">
      <div  className={styles['container']} >
        <div className={styles['sidebar']}>side

        </div>
        <div className={styles['main']}>main

        </div>
        <div className={styles['main1']}>main1

        </div>
        <div className={styles['footer']}>footer

        </div>
      </div>
    </div>

    // <div  className={styles['container']} >
      
    //   <div className="container">
    //   <div className={Cpi} >  
    //   </div>
    //    <div className={Cpu} > 
    //   </div>
    //    <div className={Cb} > 
    //   </div>
    //      <div className={Cpu} > 
    //   </div>
    //    <div className={Cy} > 
    //   </div>
    //   <img src="assets/images/box.png" alt=""  className={styles['img-head']}/>
      
    // </div>
    // </div>

    
  );
};

export default Headerhome;