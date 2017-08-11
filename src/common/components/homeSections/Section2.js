import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

import { PopCircle } from 'Components/common';
import { blue, yellow, purple, pink } from 'Constants';

import './Section2.scss'

const Section2 = ({ lang: { section2: content } }) => {
  const settings = {
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: false,
      responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
 
  return (
    <div className="section2">
      <Grid>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h1 className="header">{content.header}</h1>
          </Col>
        </Row>
      </Grid>
      <div className="sliderRow">
        <Slider {...settings}>
          <img src="/assets/images/home/section2/qualy.png" alt="qualy"/>
          <img src="/assets/images/home/section2/ygg.png" alt="ygg"/>
          <img src="/assets/images/home/section2/mac5.png" alt="mac5"/>
          <img src="/assets/images/home/section2/mac5.png" alt="mac5"/>
        </Slider>
      </div>
      <Col smOffset={9} mdOffset={9} lgOffset={9} sm={3} md={3} lg={3} xsHidden mdHidden className="LiquidCircle">
        <PopCircle color={blue} radius={264} position={["20px", "20px", "20px", "20px"]}/>
        <PopCircle color={yellow} radius={86} position={["30px", "auto", "auto", "-10px"]}/>
        <PopCircle color={purple} radius={145} position={["-25px", "140px", "auto", "auto"]}/>
        <PopCircle color={pink} radius={86} position={["-80px", "auto", "auto", "auto"]}/>
      </Col>
    </div>
  );
}

export default Section2;