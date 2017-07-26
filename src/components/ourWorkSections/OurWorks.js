import React from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

import { CardWork } from 'Components/common'
import LiquidCircle from 'Components/common/LiquidCircle';
import { pink, yellow } from 'Components/common/LiquidCircleColor';
import './OurWorks.scss'

const OurWorks = ({ lang: { OurWorks: content } }) => {
  return (
    <div className="OurWorks">
      <Grid>
        <Col lg={4} md={4} sm={4}>
            <h1 dangerouslySetInnerHTML={{__html: content.header}}></h1>
          <hr/>
          <p>{ content.content }</p>
          <p>{ content.content1 }</p>
          <LiquidCircle id={20} radius={189} color={pink} position={["3px", "63px", "auto", "auto"]}/>     
            <LiquidCircle id={21} radius={170} color={yellow} position={["auto", "auto", "-68px", "-68px"]}/>   
        </Col>
        <Col md={8}>
          <Col lg={12} md={12} sm={12}>
            <Tabs defaultActiveKey={2} id="Tab">
              <Tab eventKey={1} title={ content.tab.all }></Tab>
              <Tab eventKey={2} title={ content.tab.popular }></Tab>
              <Tab eventKey={3} title={ content.tab.public }></Tab>
              <Tab eventKey={4} title={ content.tab.desktop }></Tab>
              <Tab eventKey={5} title={ content.tab.moblie }></Tab>
            </Tabs>
          </Col>
        </Col>         
        <div className="rowTop">
          <Col lg={4} md={4} sm={4}>
            <CardWork img='/assets/images/Work/mac5.png' title='MAC-5'/>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <CardWork img='/assets/images/Work/chula.png' title='CHULA'/>            
          </Col>
        </div>    
        <div className="rowMiddle">     
          <Col lg={4} md={4} sm={4}>
            <CardWork img='/assets/images/Work/asap.png' title='ASAP PROJECT'/>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <CardWork  img='/assets/images/Work/ygg.png' title='YGGDRAZIL'/>
          </Col>
        </div>
        <div className="rowBottom"> 
          <Col lgOffset={4} mdOffset={4}  smOffset={4} lg={4} md={4} sm={4}>
            <CardWork img='/assets/images/Work/qualy.png' title='QUALY &amp; CO'/> 
          </Col>
          <Col lg={4} md={4} sm={4}>
            <CardWork img='/assets/images/Work/btr.png' title='B THREE R'/>
          </Col>
        </div>
      </Grid>
    </div>
  );
};

export default OurWorks;