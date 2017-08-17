import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { PopCircle } from 'Components/common';
import { blue, yellow, purple, pink } from 'Constants';
import { ButtonBubble } from 'Components/common'


import './Section1.scss'

const Section1 = ({ lang: { section1: content }, match: { params: { id, lang } } }) => {
  return (
    <Grid className="section1">
      <Row>
        <Col smOffset={5} mdOffset={5} lgOffset={6} md={7} lg={6} sm={6} xsHidden>
          <Image src="/assets/images/home/section1/watch.png" responsive className="imgWatch"/>
        </Col>
      </Row>
      <Row className="header">
        <Col sm={4} md={4} lg={4} xsHidden smHidden>
          <PopCircle color={blue} radius={264} position={["20px", "20px", "20px", "20px"]}/>
          <PopCircle color={yellow} radius={86} position={["182px", "47px", "auto", "auto"]}/>
          <PopCircle color={purple} radius={145} position={["-25px", "auto", "auto", "-15px"]}/>
          <Col mdHidden><PopCircle color={pink} radius={86} position={["-100px", "auto", "auto", "-77px"]}/></Col>          
        </Col>
        <Col sm={11} xs={12} md={8} lg={8} smOffset={1} lgOffset={4} mdOffset={4}>
          <h1 dangerouslySetInnerHTML={{__html: content.header}}></h1>
        </Col>
      </Row> 
      <Row >
        <Col  md={5} lg={5} xs={2} sm={5} className="text-right">  
        <hr/>               
        </Col>
        <Col md={6} lg={6} xs={10} sm={6} >
          <p>{ content.content }</p>
        </Col>
      </Row> 
      <Row >
        <Col mdOffset={5} lgOffset={5}  xsOffset={4}  smOffset={4} lg={6} md={65} sm={5} xs={5} >  
          <Link to={`/${lang}/our-work`} >
            <ButtonBubble>
              { content.button }
            </ButtonBubble>          
          </Link>
        </Col>
      </Row>
    </Grid>
  );
};
export default withRouter(Section1);