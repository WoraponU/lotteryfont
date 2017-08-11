import React from 'react';
import { Grid, Row, Image, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

import { PopCircle } from 'Components/common';
import { blue, yellow, purple, pink } from 'Constants';

import './HelloFriend.scss' 

const HelloFriendComponent = ({ lang: { HelloFriend: content }}) => {
  return (
    <div className="HelloFriend">
       <Grid >
        <Row className="text-center">
          <h1>{ content.header }</h1>
          <Image src="/assets/images/common/line.png"></Image>
        </Row>
        <Row>
          <Col lg={12} md={12} xsHidden smHidden>
            <PopCircle color={purple} radius={145} position={["-82px", "0px", "auto", "auto"]}/>
            <PopCircle color={yellow} radius={86}  position={["-6px", "-22px", "auto", "auto"]}/>      
            <PopCircle color={pink} radius={86} position={["-155px", "125px", "auto", "auto"]}/>
          </Col>
          <Col lg={12} md={12} xs={12}> 
            <Image src="/assets/images/about/helloFriend/room.png"></Image>
          </Col>
        </Row>
        <Row className="row2Image">
          <Col lg={3} xsHidden smHidden>
            <Image src="/assets/images/about/helloFriend/speaker.png" className="imgOut" />
            <Image src="/assets/images/about/helloFriend/work.png"></Image>   
            <PopCircle color={blue} radius={131} position={["auto", "-132px", "auto", "auto"]}/>           
          </Col>
           <Col lg={3} xsHidden smHidden>
            <Image src="/assets/images/about/helloFriend/chair.png"></Image>          
          </Col>
          <Col lg={6} className="blockText">
            <h3>{ content.title1 }</h3>
            <p>{ content.subtitle1 }</p>
            <p>{ content.subtitle2 }</p>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={9} lg={3} xsHidden smHidden className="textColor">
            <h3 className="txPink">{ content.title2 }</h3>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default withRouter(HelloFriendComponent);