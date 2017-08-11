import React from 'react';
import { Row, Grid, Col, Image } from 'react-bootstrap';

import { PopCircle } from 'Components/common';
import { blue, yellow, purple, pink } from 'Constants';

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
            <Image src="/assets/images/home/section4/creative.png" className="imgCreative"/>
            <Image src="/assets/images/home/section4/moblie.png" className="imgMoblie" />
          </Col>
          <Col lg={4} md={4} xsHidden smHidden>
            <Image src="/assets/images/home/section4/white.png" className="imgWhite"/>
            <PopCircle color={pink} radius={98} position={["165px", "134px", "auto", "auto"]}/>
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
            <Image src="/assets/images/home/section4/web.png" className="imgWeb"/>
            
          </Col>
          <Col lg={4} md={4} xsHidden smHidden>
            <Image src="/assets/images/home/section4/monitor.png" className="imgMonitor" />
             <PopCircle color={blue} radius={190} position={["auto", "-250px", "-154px", "auto"]}/>
            <PopCircle color={yellow} radius={62} position={["auto", "-119px", "-174px", "auto"]}/>
            <PopCircle color={purple} radius={104} position={["auto", "-128px", "0px", "auto"]}/>
          </Col>          
        </Row>
      </Grid>
    </div>
  );
};

export default Section4;