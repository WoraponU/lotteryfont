import React from 'react';
import { Grid, Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import {
  ShareButtons,
} from 'react-share';

import { PopCircle } from 'Components/common';
import { blue, yellow, purple, pink } from 'Constants';

import './WorkDetail.scss'

const WorkDetail = (props) => {
  const { 
    lang: { workDetail: content }, 
    match: { params: { lang } }, 
    contentLoaded, 
    onClickOtherWork, 
    location: { href } 
  } = props;

  const settingsSlick = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: false,
    responsive: [
       {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {   
          slidesToShow: 2, 
          arrows: true,
          dots: false,
          infinite: false,
          variableWidth: false,
          adaptiveHeight: false,
          wipeToSlide: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: false,
          adaptiveHeight: false,
        }
      }
    ]
  };
  const {
    FacebookShareButton,
    TwitterShareButton,
  } = ShareButtons;
  

  return (
    <div className="workDetail">
      <Grid>
        <PopCircle color={yellow} radius={86} position={["200px", "400px", "auto", "auto"]}/> 
        <Row className="detailHeader">
          <Breadcrumb> 
            <LinkContainer to={`/${lang}`}><Breadcrumb.Item>{ content.breadCrumb.home }</Breadcrumb.Item></LinkContainer>
            <LinkContainer to={`/${lang}/our-work`}><Breadcrumb.Item>{ content.breadCrumb.ourWork }</Breadcrumb.Item></LinkContainer>
            <Breadcrumb.Item active>{contentLoaded.name}</Breadcrumb.Item>
          </Breadcrumb>
          <PopCircle color={blue} radius={104} position={["auto", "auto", "-108px", "-147px"]}/>     
          <Col lgOffset={3} mdOffset={2} smOffset={1} lg={8} md={9} sm={10} xs={12}>
            <h1 dangerouslySetInnerHTML={{__html: contentLoaded.mainHeader}}></h1>
          </Col>        
          <Col lgOffset={3} mdOffset={2} smOffset={2} lg={6} md={8} sm={8} xs={12}>
            <h3 dangerouslySetInnerHTML={{__html: contentLoaded.subHeader1}}></h3>
            <p dangerouslySetInnerHTML={{__html: contentLoaded.content1}}></p>
          </Col>
        </Row>
        <Row className="detailImage">
          <Col lg={2} md={2} sm={2} xsHidden className="text-right">
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
          <Col lg={10} md={10} sm={10} xs={12}>
            <Image src={`/assets/images/work/workDetail/${contentLoaded.imageInfo.webScreenShot.path}`}/>    
          </Col>
        </Row>
        <Row className="detailTitle">
          <Col xsHidden>
            <PopCircle color={blue} radius={137} position={["auto", "0px", "50px", "auto"]}/>    
            <PopCircle color={pink} radius={61} position={["auto", "0px", "0px", "auto"]}/>   
          </Col>  
          <Col lgOffset={3} mdOffset={3} smOffset={2} lg={8} md={8} sm={8} xs={12}>
              <Image src={`/assets/images/work/workDetail/${contentLoaded.imageInfo.logo.path}`}/>   
            <hr/>
            <h3 dangerouslySetInnerHTML={{__html: contentLoaded.subHeader2}}></h3>
            <p dangerouslySetInnerHTML={{__html: contentLoaded.content2}}></p>
          </Col>
        </Row>
        
        <div className="sliderRow">
          <Slider {...settingsSlick}>
            {
              contentLoaded.imageInfo.slides.map((slide,index) => (
                <Image key={index} src={slide.path}/>
              ))
            }
          </Slider>
        </div>
        <Row className="detailTitle">        
          <PopCircle color={blue} radius={121} position={["170px", "0px", "0px", "-193px"]}/>   
          <PopCircle color={purple} radius={84} position={["56px", "0px", "0px", "0px"]}/>   
          <Col lgOffset={3} mdOffset={3} smOffset={3} lg={6} md={6} sm={6} xs={12}>
            <h3 dangerouslySetInnerHTML={{__html: contentLoaded.subHeader3}}></h3>
            <p dangerouslySetInnerHTML={{__html: contentLoaded.content3}}></p>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="text-center">
            <Button className="btn-black mt10">Visit Website</Button>
          </Col>
        </Row>
        <Row className="tabBottom">         
          <Col lg={1} md={1} sm={1} xs={1}>
            <a href="#" onClick={(e) => onClickOtherWork(e)}>
              <Image src="/assets/images/work/workDetail/arrLeft.png" className="arrow"/>
            </a>            
          </Col>
          <Col lg={10} md={10} sm={10} xs={9} className="text-right ">
            <FacebookShareButton url={href} children={<Image src="/assets/images/work/workDetail/facebook.png"/>} /> 
            <TwitterShareButton url={href} children={<Image src="/assets/images/work/workDetail/twitter.png"/>} /> 
          </Col>
          <Col lg={1} md={1} sm={1} xs={1}>
            <a href="#" onClick={(e) => onClickOtherWork(e)}>
              <Image src="/assets/images/work/workDetail/arrRight.png" className="arrow"/>
            </a>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default withRouter(WorkDetail);


