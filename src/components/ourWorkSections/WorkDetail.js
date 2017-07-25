import React from 'react';
import { Grid, Row, Col, Image, Button} from 'react-bootstrap';
import Slider from 'react-slick';

import LiquidCircle from 'Components/common/LiquidCircle';
import { pink, yellow } from 'Components/common/LiquidCircleColor';

import './WorkDetail.scss'

const settings = {
  autoplay: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true, 
  draggable: false,
  lazyLoad: true,
};

const WorkDetail = () => {
  return (
    <div className="workDetail">
      <Grid>
        <LiquidCircle id={22} radius={170} color={yellow} position={["auto", "auto", "auto", "auto"]}/> 
        <Row className="detailHeader">
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={8} md={8} sm={8}><h1>Making it easier for users <br/>to find the right insurance.</h1></Col>        
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={6} md={6} sm={6}>
            <h3>Giving users the tools to make <br/>the best decision.</h3>
            <p>How many miles do you drive in a year? It’s a tricky question to answer, and who knows how it might impact your car insurance if you get it wrong? Via in-home user research, we discovered that users were easily derailed by difficult-to-answer questions during the comparison. We saw a big opportunity to create a personalized user experience to help users attain more accuracy, as well as lower the site’s unnecessarily high abandon rate and boost brand loyalty.</p>
          </Col>
        </Row>
        <Row className="detailImage">
          <Col lg={2} md={2} sm={2} className="text-right">
            <Row>
              <h4>clients</h4>
              <p>Mac-5</p>
            </Row>
            <Row className="middle">
              <h4>services</h4>
              <p>Design <br/> Development</p>
            </Row>
            <Row><h4>year</h4>
              <p>2017</p>
            </Row>
          </Col>
          <Col lg={10} md={10} sm={10}>
            <Image src="/assets/images/Work/workDetail/Mac-5.png"/>
          </Col>
        </Row>
        <Row className="detailTitle">
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={8} md={8} sm={8}>
            <Image src="/assets/images/Work/workDetail/mac.png"/>
            <hr/>
            <p>we discovered that users were easily derailed by difficult-to-answer <br/>questions during the comparison.</p>
            <p>We saw a big opportunity to create a personalized user experience <br/>
              to help users attain more accuracy, as well as lower the site’s <br/>
              unnecessarily high abandon rate and boost brand loyalty.
            </p>
          </Col>
        </Row>

        <div className="sliderRow">
          <Slider {...settings}>
            <img src="/assets/images/home/section2/qualy.png" alt="qualy"/>
            <img src="/assets/images/home/section2/ygg.png" alt="ygg"/>
            <img src="/assets/images/home/section2/mac5.png" alt="mac5"/>          
          </Slider>
        </div>

        <Row className="detailTitle">        
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={6} md={6} sm={6}>
            <h3>Empowering through knowledge, seamlessly.</h3>
            <p>An iterative building process, executed in one-week sprints in collaboration with the client, produced numerous prototypes that allowed the team to validate ideas through user interaction. This approach gave the C-suite insight into progress and helped developers optimize the project as it moved forward. Most importantly, it empowered Huge and MoneySuperMarket to provide a more valuable experience to users. During testing, nine out of ten people found the new journey easier to user and feel better informed to make a decision.</p>
          </Col>
          <Col lg={12} md={12} sm={12} className="text-center">
            <Button className="btn-black mt10">VISIT WEBSITE</Button>
          </Col>
        </Row>
        <Row className="tabBottom">
          <Col lg={1} md={1} sm={1}>
            <Image src="/assets/images/Work/workDetail/arrLeft.png" className="arrow"/>
          </Col>
          <Col lg={10} md={10} sm={10} className="text-right">
            <Image src="/assets/images/Work/workDetail/facebook.png"/>
            <Image src="/assets/images/Work/workDetail/instagram.png"/>
            <Image src="/assets/images/Work/workDetail/twitter.png"/>
          </Col>
          <Col lg={1} md={1} sm={1}>
            <Image src="/assets/images/Work/workDetail/arrRight.png"/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default WorkDetail;