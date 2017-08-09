import React from 'react';
import { Grid, Row, Col,Image } from 'react-bootstrap';
import Slider from 'react-slick';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue } from 'Components/common/LiquidCircleColor';
import { Card } from 'Components/common'
import './Section6.scss'

const Section6 = ({ lang: { section6: content } }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    lazyLoad: true,
  };
  
  return (
    <div className="section6">
      <Grid className="text-center LiquidCircle">
        <LiquidCircle id={10} radius={300} color={blue} position={["-250px", "auto", "auto", "20px"]}/>
         <LiquidCircle id={16} radius={180} color={blue} position={["auto", "276px", "-109px", "auto"]}/>
        <Image src="/assets/images/Home/section6/line.png"/>
        <h1 dangerouslySetInnerHTML={{__html: content.header}}></h1>
      </Grid>
      <Grid >
        <Slider {...settings}>  
          <Row>
            <Col lg={3} md={3} sm={6} xs={12}>           
              <Card 
                read={content.read}
                img='/assets/images/Home/section6/card1.png' 
                title='How to make nacho and taco like a pro!' 
                subTittle='lab'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
            </Col>   
             
            <Col lg={3} md={3} sm={6} xs={12}>             
              <Card 
                read={content.read}
                img='/assets/images/Home/section6/card2.png' 
                title='How to make nacho and taco like a pro!' 
                subTittle='resources'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
            </Col>    
            <Col lg={3} md={3} sm={6} xs={12}>
              <Card 
                read={content.read}
                img='/assets/images/Home/section6/card1.png' 
                title='How to make nacho and taco like a pro!' 
                subTittle='news &amp; updates'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
            </Col>    
            <Col lg={3} md={3} sm={6} xs={12}>
              <Card 
                read={content.read}
                img='/assets/images/Home/section6/card1.png' 
                title='How to make nacho and taco like a pro!' 
                subTittle='This is amazing'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col> 
                     
            </Row>
          <Row>
            <Col lg={3} md={3} sm={6} xs={12}>
              <Card 
                read={content.read}
                img='/assets/images/Home/section6/card1.png' 
                title='How to make nacho and taco like a pro!' 
                subTittle='This is amazing'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <Card 
                read={content.read}
                img='/assets/images/Home/section6/card1.png' 
                title='How to make nacho and taco like a pro!' 
                subTittle='This is amazing'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <Card 
                read={content.read}
                img='/assets/images/Home/section6/card1.png' 
                title='How to make nacho and taco like a pro!' 
                subTittle='This is amazing'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}>
              <Card 
                read={content.read}
                img='/assets/images/Home/section6/card1.png' 
                title='How to make nacho and taco like a pro!' 
                subTittle='This is amazing'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col>
          </Row>
        </Slider>   
      </Grid>
    </div>
  );
};

export default Section6;