import React from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Slider from 'react-slick';

import { CardWork, PopCircle } from 'Components/common'
import { pink, yellow } from 'Constants';
import './OurWorks.scss'

const OurWorks = ({ lang: { OurWorks: content } }) => {
  const settings = {
    useCSS: true,
    lazyLoad: true,
    draggable: false,
     responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
         
        }
      }
    ]
  };
  return (
    <div className="OurWorks">
      <Grid>
        <Row>
          <Col lgOffset={4} mdOffset={4} smOffset={2} lg={8} md={8} sm={10} >
            <Tabs defaultActiveKey={1} id="Tab">
              <Tab eventKey={1} title={ content.tab.all }></Tab>
              <Tab eventKey={2} title={ content.tab.popular }></Tab>
              <Tab eventKey={3} title={ content.tab.public }></Tab>
              <Tab eventKey={4} title={ content.tab.desktop }></Tab>
              <Tab eventKey={5} title={ content.tab.moblie }></Tab>
            </Tabs>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={4} sm={12} className="content">
            <h1 dangerouslySetInnerHTML={{__html: content.header}}></h1>
            <hr/>
            <p>{ content.content }</p>
            <p>{ content.content1 }</p>
            <PopCircle color={pink} radius={86} position={["3px", "63px", "auto", "auto"]}/>    
          </Col>  
          <Slider {...settings}>   
            <div className="slider">
              <Row>
                <Col lgOffset={4} mdOffset={4} lg={4} md={4} sm={6} xs={12}>
                  <CardWork img='/assets/images/work/ourWork/mac5.png' title='MAC-5' id="mac5"/>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <CardWork img='/assets/images/work/ourWork/asap.jpg' title='ASAP' id="asap"/>            
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <CardWork img='/assets/images/work/ourWork/ygg.png' title='YGG' id="ygg"/>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <CardWork img='/assets/images/work/ourWork/chula.png' title='SPRING' id="spring"/>            
                </Col>
              </Row>
              <Row>
                <Col lgOffset={4} mdOffset={4} lg={4} md={4} sm={6} xs={12}>
                  <CardWork img='/assets/images/work/ourWork/chula.png' title='CHULA' id="chula"/>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <CardWork img='/assets/images/work/ourWork/dpmobile.jpg' title='DP (Mobile)' id="dp"/>            
                </Col>
              </Row>
            </div>
          </Slider>    
          <Col xsHidden><PopCircle color={yellow} radius={86} position={["auto", "auto", "73px", "323px"]}/></Col>        
        </Row>
      </Grid>
    </div>
  );
};

export default OurWorks;