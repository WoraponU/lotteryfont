import React from 'react';
import { Grid, Row, Image, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

import { PopCircle } from 'Components/common';
import { blue, yellow, pink } from 'Constants';

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
        <Col lgOffset={1} lg={5} md={5} sm={6} smOffset={2} className="formFreshDesign">
          <Row>           
            <h1>{ content.groupTitle.text1 }<br/><span className="textSmall">{ content.groupTitle.text2 }</span><span className="spanH1">{ content.groupTitle.text3 }</span></h1>             
            <p dangerouslySetInnerHTML={{__html: content.subtitle1}}></p>
            <p dangerouslySetInnerHTML={{__html: content.subtitle2}}></p> 
            <Col className="text-center"> 
              <LinkContainer  to={`/${lang}/our-work`} className="btn-black mt10"><Button >{ content.button }</Button></LinkContainer>
            </Col>
          </Row>
          <PopCircle color={blue} radius={131} position={["auto", "auto", "-183px", "-145px"]}/>      
          <PopCircle color={yellow} radius={86} position={["auto", "auto", "-100px", "-77px"]}/>
        </Col>

        <Col  lg={6} md={6} sm={11} smOffset={1} className="formUserInterfaces">
          <Col xsHidden><PopCircle color={pink} radius={86} position={["-216px", "0px", "auto", "auto"]}/></Col>         
          <Row>
            <Col>
              <h1>User Interfaces</h1>
            </Col>
            <Col>
              <div className="groupName">
                <Col lg={2} md={2} sm={2} xs={1} xsHidden className="text-right"><hr/></Col>
                <Col lg={10} md={10} sm={10} xs={12}>
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
            </Col><Col xsHidden>
              <Image src="/assets/images/about/ourMom/cardBlue.png" className="card1"></Image>
            </Col><Col xsHidden>
              <Image src="/assets/images/about/ourMom/card.png" className="card2"></Image>
            </Col>
          </Row>
          <Row>
            <Col lgOffset={3} mdOffset={3} smOffset={4} lg={8} md={8} sm={6}>
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