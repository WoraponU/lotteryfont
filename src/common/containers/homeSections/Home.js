import React, { Component } from 'react';
import axios from 'axios'
import { Grid, Row, Col, Jumbotron, FormGroup, FormControl, InputGroup } from 'react-bootstrap'
class Section1 extends Component {
  state = {
    attempToAccess: 0,
    isAccessSuccess: false,
    value: ''
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
      }
    })
  }

  getStatusToAccess = () => {
    return axios.get('http://localhost:3000/api/mail/test')
  }

  handleChange = (event) => {
    console.log(event.target.value)
    // this.setState({value: event.target.value});
  }

  componentDidMount() {
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
    const { isAccessSuccess } = this.state;
    if (prevIsAccessSuccess !== isAccessSuccess) {
      if (isAccessSuccess) {
        // window.open('https://pantip.com/topic/36774680');
      }
    }    
  }

  render() {
    return (
      <Grid>
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
              <InputGroup.Addon>กดเพื่อเข้าเว็บหวย</InputGroup.Addon>
              <input type="text" className="form-control"  onChange={(e) => this.handleChange(e)} />
            </InputGroup>
          </FormGroup>
          </Col>
        </Row>

        
      </Grid>
    );
  }
}


export default Section1;

