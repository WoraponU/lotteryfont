import React from 'react';
import { Grid, Row, Col,Image } from 'react-bootstrap';
import Slider from 'react-slick';

import {Card} from 'Components/common'
import './Section6.scss'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  swipeToSlide: true,
};

const Section6 = () => {
  return (
    <div className="section6">
      <Grid className="text-center">
        <Image src="assets/images/Home/section6/line.png"/>
        <h1>happening<br/>in hobbiz’s nest</h1>
      </Grid>
      <Grid>
        <Slider {...settings}>  
          <Row>
            <Col lg={3} md={3} sm={6}>           
              <Card  img='assets/images/Home/section6/card1.png' 
                      title='How to make nacho and taco like a pro!' 
                      subTittle='lab'
                      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
            </Col>      
            <Col lg={3} md={3} sm={6}>             
              <Card  img='assets/images/Home/section6/card2.png' 
                      title='How to make nacho and taco like a pro!' 
                      subTittle='resources'
                      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
            </Col>    
            <Col lg={3} md={3} sm={6}>
              <Card  img='assets/images/Home/section6/card1.png' 
                      title='How to make nacho and taco like a pro!' 
                      subTittle='news &amp; updates'
                      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
            </Col>    
            <Col lg={3} md={3} sm={6}>
              <Card  img='assets/images/Home/section6/card1.png' 
                      title='How to make nacho and taco like a pro!' 
                      subTittle='This is amazing'
                      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col> 
                     
          </Row>
          <Row>
            <Col lg={3} md={3} sm={6}>
              <Card  img='assets/images/Home/section6/card1.png' 
                      title='How to make nacho and taco like a pro!' 
                      subTittle='This is amazing'
                      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col>
            <Col lg={3} md={3} sm={6}>
              <Card  img='assets/images/Home/section6/card1.png' 
                      title='How to make nacho and taco like a pro!' 
                      subTittle='This is amazing'
                      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col>
            <Col lg={3} md={3} sm={6}>
              <Card  img='assets/images/Home/section6/card1.png' 
                      title='How to make nacho and taco like a pro!' 
                      subTittle='This is amazing'
                      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
            </Col>
            <Col lg={3} md={3} sm={6}>
              <Card  img='assets/images/Home/section6/card1.png' 
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