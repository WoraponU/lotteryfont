import React from 'react';
import { Row, Grid, Col, Image } from 'react-bootstrap';

// import LiquidCircle from 'Components/common/LiquidCircle';
// import { blue, yellow, purple } from 'Components/common/LiquidCircleColor';
import './Section4.scss'

const Section4 = ({ lang: { section4: content } }) => {
  return (
    <div className="section4">
      <Grid>
        <Row>         
          <Col sm={12} md={12} lg={12} className="text-center">
            <h1 className="header" dangerouslySetInnerHTML={{__html: content.header}}></h1>
          </Col>
        </Row>
      </Grid>   
      <Grid>
        <Row className="rowPosition">         
          <Col lg={4} md={4} xsHidden smHidden>
            <Image src="/assets/images/home/section4/creative.png" className="imgCard2"/>
          </Col>
          <Col lg={4} md={4} xsHidden smHidden>
            <Image src="/assets/images/home/section4/moblie.png" className="imgOut" />
          </Col>  
          <Col lg={4} md={4} xsHidden smHidden className="LiquidCircle" >
            <Image src="/assets/images/home/section4/white.png" className="imgCard"/>
            {/* <LiquidCircle id={9} radius={200} color={pink} position={["165px", "70px", "auto", "auto"]}/> */}
          </Col>
          <Col sm={12} xs={12} lgHidden mdHidden className="xsImg">
            <Image src="/assets/images/home/section4/services.png" />
          </Col>
          <Col lg={4} md={4} className="text-right">
            <p dangerouslySetInnerHTML={{__html: content.subHeader}}></p>
          </Col>
        </Row>
         <Row >
          <Col lg={8} md={8} xsHidden smHidden>
            <Image src="/assets/images/home/section4/note.png" />
            <Image src="/assets/images/home/section4/web.png" className="imgCard4"/>
            
          </Col>
          <Col lg={4} md={4} xsHidden smHidden>
            <Image src="/assets/images/home/section4/monitor.png" className="imgCard3" />
          </Col>
          <Col xsHidden smHidden  mdHidden> 
             {/* <LiquidCircle id={19} radius={300} color={blue} position={["auto", "-250px", "-154px", "auto"]}/>
            <LiquidCircle id={17} radius={160} color={yellow} position={["auto", "-119px", "-174px", "auto"]}/>
            <LiquidCircle id={18} radius={210} color={purple} position={["auto", "-128px", "0px", "auto"]}/>  */}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Section4;