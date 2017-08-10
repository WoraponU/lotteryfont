import React from 'react';
import { Grid, Row, Image, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, yellow, pink } from 'Components/common/LiquidCircleColor';

import './OurMom.scss'

const OurMomComponent = ({ lang: { OurMom: content }, match: { params: { id, lang } } }) => {
  return (
    <div className="OurMom"> 
      <Grid>
        <Row className="text-center">
          <h1>{ content.header }</h1>
        </Row>
      </Grid>
      <Grid>
        <Col lgOffset={1} mdOffset={1} smOffset={1} lg={5} md={5} sm={5} className="formFreshDesign">
          <Row>
            <Col>
              <h1>{ content.groupTitle.text1 }<br/><span className="textSmall">{ content.groupTitle.text2 }</span><span className="spanH1">{ content.groupTitle.text3 }</span></h1>             
              <p dangerouslySetInnerHTML={{__html: content.subtitle1}}></p>
              <p dangerouslySetInnerHTML={{__html: content.subtitle2}}></p>  
              <LinkContainer  to={`/${lang}/our-work`} className="btn-black mt10"><Button >{ content.button }</Button></LinkContainer>
            </Col>
          </Row>
          <LiquidCircle id={37} radius={230} color={blue} position={["auto", "auto", "-252px", "-210px"]}/>                    
          <LiquidCircle id={36} radius={180} color={yellow} position={["autox", "auto", "auto", "-143px"]}/>
        </Col>
        <Col  lg={6} md={6} sm={6} className="formUserInterfaces">
          <LiquidCircle id={38} radius={180} color={pink} position={["-216px", "0px", "auto", "auto"]}/>
          <Row>
            <Col>
              <h1>User Interfaces</h1>
            </Col>
            <Col>
              <div className="groupName">
                <Col lg={2} md={2} sm={2} className="text-right"><hr/></Col>
                <Col lg={10} md={10} sm={10}>
                  <span className="allWork">ALL WORK</span>
                  <span className="popular">POPULAR</span>
                  <span>THIS MONTH</span>
                </Col>
              </div>
            </Col>
          </Row>
          <Row className="zImg">
            <Col>
              <Image src="/assets/images/about/ourMom/beby.png" className="card0"></Image>
              <Image src="/assets/images/about/ourMom/cardBlue.png" className="card1"></Image>
              <Image src="/assets/images/about/ourMom/card.png" className="card2"></Image>
            </Col>
          </Row>
          <Row>
            <Col lgOffset={4} mdOffset={4} smOffset={4} lg={7} md={7} sm={7}>
              <h3>Every interaction is <br/>a communication</h3>
              <p> We Love Making Life Easier – It's Not Just Work-life Balance. Every Hobbist Are Driven By Passion. We Merge Work And Life Together With The Joy Of Making Our Client's Life Easier.</p>
            </Col>
          </Row>
        </Col>
      </Grid>
    </div>
  );
};

export default withRouter(OurMomComponent);