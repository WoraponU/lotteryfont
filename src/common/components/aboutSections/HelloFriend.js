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
          <Col lg={12} md={12}  xsHidden smHidden>
            <PopCircle color={purple} radius={145} position={["70px", "30px", "auto", "auto"]}/>
            <PopCircle color={yellow} radius={86}  position={["150px", "0px", "auto", "auto"]}/>      
            <PopCircle color={pink} radius={86} position={["-28px", "164px", "auto", "auto"]}/>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}> 
            <Image className="imgRoom" src="/assets/images/about/helloFriend/room.png"></Image>
          </Col>
        </Row>
        <Row className="row2Image">
          <Col lg={3} md={3} xsHidden sm={3}>
            <Image src="/assets/images/about/helloFriend/speaker.png" className="imgOut" />
            <Image src="/assets/images/about/helloFriend/work.png"></Image>  
            <Col mdHidden><PopCircle color={blue} radius={131} position={["auto", "-74px", "-145px", "auto"]}/></Col>              
          </Col>
           <Col lg={3} md={3}  xsHidden sm={3}>
            <Image src="/assets/images/about/helloFriend/chair.png"></Image>          
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}  className="blockText">
            <h3>{ content.title1 }</h3>
            <p>{ content.subtitle1 }</p>
            <p>{ content.subtitle2 }</p>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={8} mdOffset={8} smOffset={7} lg={3} md={3} sm={4} xs={12} className="textColor">
            <h3 className="txPink">{ content.title2 }</h3>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default withRouter(HelloFriendComponent);