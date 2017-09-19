import React, { Component } from 'react';
import axios from 'axios'
import { Grid, Row, Col, Jumbotron, FormGroup, Button, InputGroup } from 'react-bootstrap'

import './Home.scss'

class Home extends Component {
  state = {
    attempToAccess: 0,
    isAccessSuccess: false,
    value: 'https://www.lotto.ktbnetbank.com'
  }

  updateStatus = (status) => {
    const { attempToAccess } = this.state;
    this.setState({
      isAccessSuccess: (status === 'success') ? true : false,
      attempToAccess
    }, () => {
      const { attempToAccess, isAccessSuccess } = this.state

      if (!isAccessSuccess) {
        const statusToAccess = this.getStatusToAccess();
    
        statusToAccess    
        .then((response) => {
          return this.updateStatus('success')
        })
        .catch((error) => {
          this.setState({
            isAccessSuccess: isAccessSuccess,
            attempToAccess: attempToAccess + 1
          })
          return this.updateStatus('fail')
        });
      } else {
        this.setState({
          isAccessSuccess: false,
          attempToAccess: 0,
        })
      }
    })
  }

  getStatusToAccess = () => {
    const { value } = this.state
    const params = {
      params: {
        url: value
      }
    }
    
    return axios.get('http://localhost:3000/api/mail/test', params)
  }

  onClickToLotto = () => {
    const statusToAccess = this.getStatusToAccess();

    statusToAccess    
    .then((response) => {
      return this.updateStatus('success')
    })
    .catch((error) => {
      return this.updateStatus('fail')
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { isAccessSuccess: prevIsAccessSuccess } = prevState;
    const { isAccessSuccess, value } = this.state;
    if (prevIsAccessSuccess !== isAccessSuccess) {
      if (isAccessSuccess) {
        window.open(value);
      }
    }    
  }

  render() {
    const { attempToAccess, value } = this.state

    return (
      <Grid className="home">
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12} >  
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12} >  
          <FormGroup bsSize="large">
            <InputGroup>
              <input type="text" className="form-control" value={value}/>
              <InputGroup.Addon>ไปยังลิ้งค์เว็บกดหวย</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={4} smOffset={4} mdOffset={4} lgOffset={4} xs={4} sm={4} md={4} lg={4}>  
            <Button bsStyle="primary" bsSize="large" disabled={!!attempToAccess} block onClick={() => this.onClickToLotto()}>กดหวย</Button>
            {this.state.attempToAccess}
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default Home;

