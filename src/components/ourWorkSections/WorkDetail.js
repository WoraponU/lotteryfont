import React from 'react';
import { Grid, Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, yellow, purple, pink } from 'Components/common/LiquidCircleColor';

import './WorkDetail.scss'

const WorkDetail = ({ lang: { workDetail: content }, contentLoaded, match: { params: { id, lang } } }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 2,
    lazyLoad: true,
  };

  return (
    <div className="workDetail">
      <Grid>
        <LiquidCircle id={22} radius={170} color={yellow} position={["200px", "400px", "auto", "auto"]}/> 
        <Row className="detailHeader">
          <Breadcrumb> 
            <LinkContainer to={`/${lang}`}><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
            <LinkContainer to={`/${lang}/our-work`}><Breadcrumb.Item>Our Work</Breadcrumb.Item></LinkContainer>
            <Breadcrumb.Item active>{contentLoaded.name}</Breadcrumb.Item>
          </Breadcrumb>
          
          <LiquidCircle id={23} radius={190} color={blue} position={["auto", "auto", "-108px", "-147px"]}/>           
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={8} md={8} sm={8}>
            <h1 dangerouslySetInnerHTML={{__html: contentLoaded.mainHeader}}></h1>
          </Col>        
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={6} md={6} sm={6}>
            <h3 dangerouslySetInnerHTML={{__html: contentLoaded.subHeader1}}></h3>
            <p dangerouslySetInnerHTML={{__html: contentLoaded.content1}}></p>
          </Col>
        </Row>
        <Row className="detailImage">
          <Col lg={2} md={2} sm={2} className="text-right">
            <Row>
              <h4>{ content.detailImage.clients }</h4>
                <p dangerouslySetInnerHTML={{__html: contentLoaded.imageInfo.webScreenShot.client}}></p>  
            </Row>
            <Row className="middle">
              <h4>{ content.detailImage.services }</h4>
               <p dangerouslySetInnerHTML={{__html: contentLoaded.imageInfo.webScreenShot.service}}></p> 
            </Row>
            <Row><h4>{ content.detailImage.year }</h4>
               <p dangerouslySetInnerHTML={{__html: contentLoaded.imageInfo.webScreenShot.year}}></p> 
            </Row>
          </Col>
          <Col lg={10} md={10} sm={10}>
                <Image src={`/assets/images/work/workDetail/${contentLoaded.imageInfo.webScreenShot.path}`}/>    
          </Col>
        </Row>
        <Row className="detailTitle">
          <LiquidCircle id={24} radius={250} color={blue} position={["auto", "-130px", "50px", "auto"]}/>    
          <LiquidCircle id={25} radius={160} color={pink} position={["auto", "-150px", "0px", "auto"]}/>    
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={8} md={8} sm={8}>
               <Image src={`/assets/images/work/workDetail/${contentLoaded.imageInfo.logo.path}`}/>   
            <hr/>
            <h3 dangerouslySetInnerHTML={{__html: contentLoaded.subHeader2}}></h3>
            <p dangerouslySetInnerHTML={{__html: contentLoaded.content2}}></p>
          </Col>
        </Row>
        
        <div className="sliderRow">
          <Slider {...settings}>
            <img src="/assets/images/home/section2/qualy.png" alt="qualy"/>
            <img src="/assets/images/home/section2/ygg.png" alt="ygg"/>
            <img src="/assets/images/home/section2/mac5.png" alt="mac5"/>
            <img src="/assets/images/home/section2/qualy.png" alt="qualy"/>
            <img src="/assets/images/home/section2/ygg.png" alt="ygg"/>
            <img src="/assets/images/home/section2/mac5.png" alt="mac5"/>
          </Slider>
        </div>
        <Row className="detailTitle">        
          <LiquidCircle id={26} radius={250} color={blue} position={["170px", "0px", "0px", "-193px"]}/>    
          <LiquidCircle id={27} radius={190} color={purple} position={["56px", "0px", "0px", "0px"]}/>   
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={6} md={6} sm={6}>
            <h3 dangerouslySetInnerHTML={{__html: contentLoaded.subHeader3}}></h3>
            <p dangerouslySetInnerHTML={{__html: contentLoaded.content3}}></p>
          </Col>
          <Col lg={12} md={12} sm={12} className="text-center">
            <Button className="btn-black mt10">{ content.button }</Button>
          </Col>
        </Row>
        <Row className="tabBottom">         
          <Col lg={1} md={1} sm={1}>
            <Image src="/assets/images/work/workDetail/arrLeft.png" className="arrow"/>
          </Col>
          <Col lg={10} md={10} sm={10} className="text-right ">
            <Image src="/assets/images/work/workDetail/facebook.png"/>
            <Image src="/assets/images/work/workDetail/instagram.png"/>
            <Image src="/assets/images/work/workDetail/twitter.png"/>
          </Col>
          <Col lg={1} md={1} sm={1}>
            <Image src="/assets/images/work/workDetail/arrRight.png" className="arrow"/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default withRouter(WorkDetail);