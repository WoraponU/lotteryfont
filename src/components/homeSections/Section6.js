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
           <Col lg={3} md={3}>
          
           <Card  img='assets/images/Home/section6/card1.png' 
                  h2='How to make nacho and taco like a pro!' 
                  h3='lab'
                  p='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
          </Col>      
             <Col lg={3} md={3}>
           
           <Card  img='assets/images/Home/section6/card2.png' 
                  h2='How to make nacho and taco like a pro!' 
                  h3='resources'
                  p='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
          </Col>    
            <Col lg={3} md={3}>
           
           <Card  img='assets/images/Home/section6/card1.png' 
                  h2='How to make nacho and taco like a pro!' 
                  h3='news &amp; updates'
                  p='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
          </Col>    
            <Col lg={3} md={3}>
           
           <Card  img='assets/images/Home/section6/card1.png' 
                  h2='How to make nacho and taco like a pro!' 
                  h3='This is amazing'
                  p='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>         
          </Col>          
         </Row>
          </Slider>   
      </Grid>
    </div>
  );
};

export default Section6;