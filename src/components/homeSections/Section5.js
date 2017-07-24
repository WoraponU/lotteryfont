import React from 'react';
import { Grid, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

import './Section5.scss'

const Section5 = ({ lang: { section5: content } }) => {
  return (
    <div className="section5">
      <Grid>
        <h1 className="header">{content.header}</h1>
      </Grid>
      <Grid>                  
        <ListGroup>
          <ListGroupItem><Image src="/assets/images/Home/section5/chula.png"/></ListGroupItem>
          <ListGroupItem><Image src="/assets/images/Home/section5/double.png"/></ListGroupItem>
          <ListGroupItem><Image src="/assets/images/Home/section5/qualy.png"/></ListGroupItem> 
          <ListGroupItem><Image src="/assets/images/Home/section5/mac.png" /></ListGroupItem>
          <ListGroupItem><Image src="/assets/images/Home/section5/bps.png"/></ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem><Image src="/assets/images/Home/section5/bsu.png"/></ListGroupItem>
          <ListGroupItem><Image src="/assets/images/Home/section5/plastic.png"/></ListGroupItem>
          <ListGroupItem><Image src="/assets/images/Home/section5/ygg.png"/></ListGroupItem>
          <ListGroupItem><Image src="/assets/images/Home/section5/spring.png"/></ListGroupItem>
          <ListGroupItem><Image src="/assets/images/Home/section5/layer.png"/></ListGroupItem>
        </ListGroup>        
      </Grid> 
    </div>
  );
};

export default Section5;