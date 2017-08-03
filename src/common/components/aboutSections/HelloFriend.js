import React from 'react';
import { Grid, Row, Image, Col } from 'react-bootstrap';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, yellow, purple, pink } from 'Components/common/LiquidCircleColor';

import './HelloFriend.scss' 

const HelloFriend = () => {
  return (
    <div className="HelloFriend">
       <Grid >
        <Row className="text-center">
          <h1>Hello friend!</h1>
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
            <h3>We are a Bangkok based digital agency with global reach.</h3>
            <p>We believe brands are made by the interactions they create. We believe that beautiful and usable are complementary. We believe that everything we put in front of your customers should be interesting and useful to each one of them. 
              <br/>
              We are LiveArea, the PFS digital experience agency with a boutique approach and world-class capabilities. We meld strategy, creativity, and technology until they disappear beneath perfectly branded commerce experiences for core customers.</p>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={9} lg={3} className="textColor">
            <h3 className="txPink">Transform brands, grow</h3>
            <h3 className="txPink">businesses and make</h3>
            <h3 className="txPink">people’s lives better.</h3>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default HelloFriend;