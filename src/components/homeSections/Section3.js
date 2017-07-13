import React, { Component } from 'react';
import { Grid, Row, Col, Image, PageHeader} from 'react-bootstrap';

import './Section3.scss'

class Section3 extends Component {  
  render() {
    return (
      <Grid className="section3">
        {/* <Row className="Header">
          <Col xs={12} md={12}>
            <p>our moms said, we are the best.</p>
          </Col>      
        </Row> */}
         <PageHeader>our moms said, we are the best. </PageHeader>
        <Row>
          <Col lg={3} md={3}>
            <Image src="assets/images/Home/section3/img1.png" />
          </Col>
          <Col lg={3} md={3}>
            <Image src="assets/images/Home/section3/img2.png" />
          </Col>
          <Col lg={3} md={3}>
            <Image src="assets/images/Home/section3/img3.png" />
          </Col>
          <Col lg={3} md={3}>
            <p className="subHeader">Transform brands, grow businesses and make people’s lives better.</p>
          </Col> 
        </Row>
        <Row>
          <Col lg={6} md={6}>
            <Image src="assets/images/Home/section3/img4.png" />
          </Col>
          <Col lg={3} md={3}>
            <Image src="assets/images/Home/section3/img5.png" className="imgShadow" />
          </Col>
          <Col lg={3} md={3}>
            <Image src="assets/images/Home/section3/line.png" className="imgLine" />
          </Col> 
          <Col lg={6} md={6}>
            <Image src="assets/images/Home/section3/img6.png" />
          </Col> 
        </Row>
        <Row className="boxBottom">
          <Col md={6} className="paddingRight" >
            <h2 >We are a Bangkok based digital agency with global reach.</h2>
            <p>We believe brands are made by the interactions they create. We believe that beautiful and usable are complementary. We believe that everything we put in front of your customers should be interesting and useful to each one of them.</p>       
            <p>We are LiveArea, the PFS digital experience agency with a boutique approach and world-class capabilities. We meld strategy, creativity, and technology until they disappear beneath perfectly branded commerce experiences for core customers</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Section3;
