import React from 'react';
import { Grid, Row, Image, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, purple, yellow } from 'Components/common/LiquidCircleColor';

import './Driven.scss'

const DrivenComponent = ({ match: { params: { id, lang } }, lang: { Driven: content } }) => {
  return (
    <Grid className="driven">
      <Col lg={6} md={12} sm={12} className="title">       
        <h1 dangerouslySetInnerHTML={{__html: content.header}}></h1>
        <p dangerouslySetInnerHTML={{__html: content.subHeader}}></p>
        <LinkContainer  to={`/${lang}/our-work`} className="btn-black "><Button>DOWNLOAD</Button></LinkContainer>    
        <h3 dangerouslySetInnerHTML={{__html: content.title}}></h3> 
        <LiquidCircle id={41} radius={250} color={blue} position={["auto", "auto", "-344px", "-142px"]}/>                
        <LiquidCircle id={40} radius={200} color={purple} position={["auto", "auto", "-244px", "-180px"]}/>
      </Col>
      <Col lg={3} md={12} sm={6} className="blogShow">
        <Row>
          <Col lg={12} md={12} sm={12} className="rowImg1">
            <Image src="/assets/images/about/driven/comman.png"></Image>
            <h3>Every interaction is <br/>a communication</h3>
            <p>We Love Making Life Easier – It's Not Just Work-life Balance. Every Hobbist Are Driven By Passion. We Merge Work And Life Together With The Joy Of Making Our Client's Life Easier.</p>
          </Col> 
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} className="rowImg2">
            <Image src="/assets/images/about/driven/paper.png"></Image>
            <h3>Every interaction is <br/>a communication</h3>
            <p>We Love Making Life Easier – It's Not Just Work-life Balance. Every Hobbist Are Driven By Passion. We Merge Work And Life Together With The Joy Of Making Our Client's Life Easier.</p>
          </Col>
        </Row>
      </Col>
      <Col lg={3} md={12} sm={6} className="blogShow">
        <LiquidCircle id={39} radius={200} color={yellow} position={["-110px", "-124px", "auto", "auto"]}/>
        <Row>
          <Col lg={12} md={12} sm={12} className="rowImg3">          
            <Image src="/assets/images/about/driven/keybord.png"></Image>
            <h3>Every interaction is <br/>a communication</h3>
            <p>We Love Making Life Easier – It's Not Just Work-life Balance. Every Hobbist Are Driven By Passion. We Merge Work And Life Together With The Joy Of Making Our Client's Life Easier.</p>
          </Col>
        </Row>
      </Col>
    </Grid>
  );
};

export default withRouter(DrivenComponent);