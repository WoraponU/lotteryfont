import React from 'react';
import { PageHeader, Row, Grid, Col, Image } from 'react-bootstrap';
import './Section4.scss'

const Section4 = () => {
  return (
    <div className="section4">
      <PageHeader>Small teams working on big challenges <br/>
        in honest collaboration with our clients.
      </PageHeader>
      <Col lg={2} md={2} >
        <Image src="assets/images/Home/section4/card1.png" className="imgOut" />
      </Col>  
      <Grid>
        <Row className="rowPosition">         
         <Col lg={4} md={4} >
            <Image src="assets/images/Home/section4/card2.png" className="imgCard2"/>
          </Col>
          <Col lg={4} md={4} >
            <Image src="assets/images/Home/section4/card.png" className="imgCard"/>
          </Col>
           <Col lg={4} md={4} className="text-right">
            <p>	Website and minisite <br/>
                Branding and visual identity<br/>
                Marketing material<br/>
                Digital and offline sale kit</p>
          </Col>
        </Row>
         <Row >
          <Col lg={8} md={8}  >
            <Image src="assets/images/Home/section4/card5.png" />
          </Col>
          <Col lg={4} md={4}>
            <Image src="assets/images/Home/section4/card3.png" className={"imgCard3"} />
          </Col>
        </Row>
        <Row >
          <Col lg={3} md={3} mdOffset={4} lgOffset={4}>
            <Image src="assets/images/Home/section4/card4.png" className={"imgCard4"}/>
          </Col>         
        </Row>
      </Grid>
    </div>
  );
};

export default Section4;