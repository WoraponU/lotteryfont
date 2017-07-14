import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, yellow, purple, pink } from 'Components/common/LiquidCircleColor';
import './Section2.scss'

const settings = {
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  draggable: false,
  focusOnSelect: true,
  lazyLoad: true,
};

const Section2 = () => {
  return (
    <div className="section2">
      <Grid>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h1 className="header">OUR WORK</h1>
          </Col>
        </Row>
      </Grid>
      <div className="sliderRow">
        <Slider {...settings}>
          <img src="assets/images/home/section2/qualy.png" alt="qualy"/>
          <img src="assets/images/home/section2/ygg.png" alt="ygg"/>
          <img src="assets/images/home/section2/mac5.png" alt="mac5"/>
          <img src="assets/images/home/section2/mac5.png" alt="mac5"/>
        </Slider>
      </div>
      
      <Col smOffset={9} mdOffset={9} lgOffset={9} sm={3} md={3} lg={3} className="LiquidCircle">
        <LiquidCircle id={5} radius={300} color={blue} position={["20px", "20px", "20px", "20px"]}/>
        <LiquidCircle id={6} radius={170} color={yellow} position={["30px", "auto", "auto", "-10px"]}/>
        <LiquidCircle id={7} radius={200} color={purple} position={["-25px", "140px", "auto", "auto"]}/>
        <LiquidCircle id={8} radius={170} color={pink} position={["-80px", "auto", "auto", "auto"]}/>
      </Col>
    </div>
  );
}

export default Section2;