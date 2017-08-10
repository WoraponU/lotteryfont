import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, yellow, purple, pink } from 'Components/common/LiquidCircleColor';
import './Section1.scss'

const Section1 = ({ lang: { section1: content }, match: { params: { id, lang } } }) => {
  return (
    <Grid className="section1">
      <Row>
        <Col mdOffset={5} lgOffset={6} md={7} lg={6} sm={7} xsHidden>
          <Image src="/assets/images/home/section1/watch.png" responsive className="imgWatch"/>
        </Col>
      </Row>
      <Row className="header">
        <Col sm={4} md={4} lg={4} xsHidden smHidden>
          <LiquidCircle id={1} radius={300} color={blue} position={["20px", "20px", "20px", "20px"]}/>
          <LiquidCircle id={2} radius={170} color={yellow} position={["182px", "47px", "auto", "auto"]}/>
          <LiquidCircle id={3} radius={200} color={purple} position={["-25px", "auto", "auto", "-15px"]}/>
          <LiquidCircle id={4} radius={170} color={pink} position={["-100px", "auto", "auto", "-77px"]}/> 
        </Col>
        <Col sm={12} xs={12} md={8} lg={8} >
          <h1 dangerouslySetInnerHTML={{__html: content.header}}></h1>
        </Col>
      </Row> 
      <Row >
        <Col  md={5} lg={5} xs={2} sm={2} className="text-right">  
        <hr/>               
        </Col>
        <Col md={6} lg={6} xs={10} sm={10} >
          <p>{ content.content }</p>
        </Col>
      </Row> 
      <Row >
        <Col mdOffset={5} lgOffset={5}  xsOffset={4}  smOffset={4} lg={6} md={65} sm={5} xs={5} >          
          <LinkContainer  to={`/${lang}/our-work`} className="btn-black mt10"><Button >{ content.button }</Button></LinkContainer>
        </Col>
      </Row>
    </Grid>
  );
};
export default withRouter(Section1);