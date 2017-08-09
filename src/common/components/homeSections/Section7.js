import React from 'react';
import { Grid, Row, Col, Form, Button } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Field, reduxForm, reset } from 'redux-form'

import LiquidCircle from 'Components/common/LiquidCircle';
import { pink, purple, yellow } from 'Components/common/LiquidCircleColor';
import { Spinner } from 'Components/common';
import './Section7.scss'


const renderFormGroup = ({ input, meta: { touched, error }, errMsg, ...rest }) => (
  <div className="form-group">
    <input className="form-control" type="text" {...input} {...rest} />
    { 
      touched && error && 
      <span>{errMsg[error]}</span>
    }
  </div>
);

const Section7 = ({ 
  isPostMailContactUsFailure, 
  lang: { section7: content }, 
  isPostingMailContactUs, 
  hideAlert, 
  alertPopup,
  handleSubmit
}) => {
  const isAlertTypeSuccess = alertPopup.type === 'success';
  const alertTitle = isAlertTypeSuccess ? content.alertSuccess.title : content.alertFailure.title;
  const alertContent = isAlertTypeSuccess ? content.alertSuccess.content : content.alertFailure.content;

  return (
    <div className="section7">
      <Grid className="text-center">
         <h1>{content.header}</h1>
      </Grid>
      <Grid className="text-center containerShadow LiquidCircle ">  
        <Col xsHidden smHidden>
        <LiquidCircle id={12} radius={170} color={pink} position={["auto", "auto", "-65px", "-65px"]}/>   
        <LiquidCircle id={14} radius={230} color={purple} position={["412px", "auto", "auto", "-208px"]}/>      
        <LiquidCircle id={13} radius={170} color={yellow} position={["500px", "auto", "auto", "-245px"]}/>    
        </Col>
        <Row>
          <Col lg={2} md={2} sm={2} xs={2}>
            <hr/>
          </Col>
          <Col lg={8} md={8} sm={8} xs={10} className="text-left">
            <p>{content.content}</p>
          </Col>
        </Row>
        <Form > 
          <Row>
            <Col lg={6} md={6} sm={6}>
              <Field errMsg={content.error} name="name" component={renderFormGroup} placeholder={content.placeholder.yourName}/>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <Field errMsg={content.error} name="email" component={renderFormGroup} placeholder={content.placeholder.email}/>
            </Col>            
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <Field errMsg={content.error} name="phoneNumber" component={renderFormGroup} placeholder={content.placeholder.phoneNumber}/>
            </Col>            
            <Col lg={6} md={6} sm={6}>
              <Field errMsg={content.error} name="company" component={renderFormGroup} placeholder={content.placeholder.company}/>
            </Col>            
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Field errMsg={content.error} name="yourMind" component={renderFormGroup} placeholder={content.placeholder.yourMind}/>
            </Col>           
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Button className="btn-black mt10" disabled={isPostingMailContactUs} onClick={() => handleSubmit()}>
                {content.sendMessage}
              </Button>
              { 
                isPostingMailContactUs && <Spinner width={'25px'} height={'25px'} />             
              }
              <SweetAlert title={alertTitle} type={alertPopup.type} show={alertPopup.isShow} onConfirm={() => hideAlert()}>
                {alertContent} 
              </SweetAlert>
            </Col>           
          </Row>
        </Form>  
      </Grid>
    </div>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset('postMailContactUs'));

const validate = values => {
  const errors = {}
  if (!values.name) errors.name = 'required'
  if (!values.email) {
    errors.email = 'required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalidEmailAddress'
  }
  if (!values.phoneNumber) errors.phoneNumber = 'required'
  if (!values.yourMind) errors.yourMind = 'required'
    
  return errors
}

export default reduxForm({
  form: 'postMailContactUs',
  validate: validate,
  onSubmitSuccess: afterSubmit,
})(Section7)