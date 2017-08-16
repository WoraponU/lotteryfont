import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import { CircleClient } from 'Components/common'
import { PopCircle } from 'Components/common';
import { blue, pink, yellow, purple } from 'Constants';

import './Clients.scss'

const Clients = ({lang: { Clients: content } }) => {
  return (
    <Grid className="clients">
      <Row>   
        <PopCircle color={blue} radius={118} position={["170px", "0px", "auto", "auto"]}/>
        <PopCircle color={yellow} radius={86} position={["280px", "150px", "auto", "auto"]}/>      
        <Col sm={12} md={12} lg={12} className="text-center">  
          <h1 className="header">{content.header}</h1>      
          <Image src="/assets/images/common/line.png"></Image>    
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12} className="text-center subHeader" >
          <h1>{content.subHeader}</h1>      
          <h3 dangerouslySetInnerHTML={{__html: content.title}}></h3> 
        </Col>
      </Row>
      <div className="groupCircle text-center">     
        <Row>
          <Col xs={12} sm={2} md={2} lg={2}>
            <CircleClient img='spring'/> 
          </Col>
          <Col xs={12} sm={2} md={2} lg={2} lgOffset={2} mdOffset={2} smOffset={2}>
            <CircleClient img='ygg'/> 
          </Col>
          <Col xs={12} sm={2} md={2} lg={2} lgOffset={2} mdOffset={2} smOffset={2}>
            <CircleClient img='plastic-club'/> 
          </Col>
        </Row>
        <Row>
          <PopCircle color={pink} radius={96} position={["400px", "auto", "auto", "-155px"]}/>  
          <Col xs={12} sm={2} md={2} lg={2} lgOffset={2}>
            <CircleClient img='qualy-co'/> 
          </Col>
          <Col xs={12} sm={2} md={2} lg={2} lgOffset={2} mdOffset={2} smOffset={2}>
            <CircleClient img='bps'/> 
          </Col>
          <Col xs={12} sm={2} md={2} lg={2} lgOffset={2} mdOffset={2} smOffset={2}>
            <CircleClient img='bsu-thailand'/> 
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} md={2} lg={2}>
            <CircleClient img='mac-5'/> 
          </Col>
          <Col xs={12} sm={2} md={2} lg={2} lgOffset={2} mdOffset={2} smOffset={2}>
            <CircleClient img='double'/> 
          </Col>
        </Row>
        <PopCircle color={purple} radius={120} position={["auto", "170px", "auto", "auto"]}/>
      </div>
    </Grid>
  );
};

export default Clients;