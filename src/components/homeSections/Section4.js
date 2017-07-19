import React from 'react';
import { Row, Grid, Col, Image } from 'react-bootstrap';
import LiquidCircle from 'Components/common/LiquidCircle';
import { pink } from 'Components/common/LiquidCircleColor';
import './Section4.scss'

const Section4 = () => {
  return (
    <div className="section4">
      <Grid>
        <Row>         
          <Col sm={12} md={12} lg={12} className="text-center">
            <h1 className="header">Small teams working on big challenges<br/>in honest collaboration with our clients.</h1>
          </Col>
        </Row>
      </Grid>
      <Col lg={2} md={2} >
        <Image src="assets/images/Home/section4/card1.png" className="imgOut" />
      </Col>  
      <Grid>
        <Row className="rowPosition">         
          <Col lg={4} md={4} >
            <Image src="assets/images/Home/section4/card2.png" className="imgCard2"/>
          </Col>
          <Col lg={4} md={4} className="LiquidCircle" >
            <Image src="assets/images/Home/section4/card.png" className="imgCard"/>
             <LiquidCircle id={9} radius={200} color={pink} position={["165px", "70px", "auto", "auto"]}/>
          </Col>
          <Col lg={4} md={4} className="text-right">
            <p>	Website and minisite <br/>
                Branding and visual identity<br/>
                Marketing material<br/>
                Digital and offline sale kit</p>
          </Col>
        </Row>
         <Row >
          <Col lg={8} md={8}  >
            <Image src="assets/images/Home/section4/card5.png" />
          </Col>
          <Col lg={4} md={4}>
            <Image src="assets/images/Home/section4/card3.png" className="imgCard3" />
          </Col>
        </Row>
        <Row >
          <Col lg={3} md={3} mdOffset={4} lgOffset={4}>
            <Image src="assets/images/Home/section4/card4.png" className="imgCard4"/>
          </Col>         
        </Row>
      </Grid>
    </div>
  );
};

export default Section4;