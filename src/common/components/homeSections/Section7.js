import React from 'react';
import { Grid, Row, Col , FormGroup, FormControl, Form, Button } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';

import LiquidCircle from 'Components/common/LiquidCircle';
import { pink, purple, yellow } from 'Components/common/LiquidCircleColor';
import './Section7.scss'

const Section7 = ({isPostMailContactUsFailure, lang: { section7: content }, OnPostMailContactUs, isPostingMailContactUs, hideAlert, alertPopup }) => {
  return (
    <div className="section7">
      <Grid className="text-center">
         <h1>{content.header}</h1>
      </Grid>
      <Grid className="text-center containerShadow LiquidCircle">  
        <LiquidCircle id={12} radius={170} color={pink} position={["auto", "auto", "-65px", "-65px"]}/>   
        <LiquidCircle id={14} radius={230} color={purple} position={["412px", "auto", "auto", "-208px"]}/>      
        <LiquidCircle id={13} radius={170} color={yellow} position={["500px", "auto", "auto", "-245px"]}/>    
        <Row>
          <Col lg={2} md={2} sm={2}>
            <hr/>
          </Col>
          <Col lg={8} md={8} sm={8} className="text-left">
            <p>{content.content}</p>
          </Col>
        </Row>
        <Form > 
          <Row>
            <Col lg={6} md={6} sm={6}>
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder={content.placeholder.yourName}/>
              </FormGroup>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder={content.placeholder.email}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder={content.placeholder.phoneNumber}/>
              </FormGroup>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder={content.placeholder.company}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder={content.placeholder.yourMind}/>
              </FormGroup>
            </Col>           
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Button className="btn-black mt10" onClick={() => OnPostMailContactUs()}>
                {content.sendMessage}
              </Button>
              { 
                isPostingMailContactUs && <i className="fa fa-spinner" aria-hidden="true"></i>                
              }
               <SweetAlert title="Here's a message!" type={alertPopup.type} show={alertPopup.isShow} onConfirm={() => hideAlert()} />               
            </Col>           
          </Row>
        </Form>  
      </Grid>
    </div>
  );
};

export default Section7;