import React from 'react';
import { Grid, Row, Image, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, yellow, purple, pink } from 'Components/common/LiquidCircleColor';

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
          <Col lg={12}>
            <LiquidCircle id={32} radius={220} color={purple} position={["-82px", "0px", "auto", "auto"]}/>
            <LiquidCircle id={33} radius={170} color={yellow} position={["-155px", "125px", "auto", "auto"]}/>
            <LiquidCircle id={34} radius={170} color={pink} position={["-6px", "-22px", "auto", "auto"]}/>
            <Image src="/assets/images/about/helloFriend/room.png"></Image>
          </Col>
        </Row>
        <Row className="row2Image">
          <Col lg={3}>
            <Image src="/assets/images/about/helloFriend/work.png"></Image>          
            <LiquidCircle id={35} radius={220} color={blue} position={["auto", "-132px", "auto", "auto"]}/>                      
          </Col>
           <Col lg={3}>
            <Image src="/assets/images/about/helloFriend/chair.png"></Image>          
          </Col>
          <Col lg={6} className="blockText">
            <h3>{ content.title1 }</h3>
            <p>{ content.subtitle1 }</p>
            <p>{ content.subtitle2 }</p>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={9} lg={3} className="textColor">
            <h3 className="txPink">{ content.title2 }</h3>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default withRouter(HelloFriendComponent);