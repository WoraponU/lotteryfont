import React, { Component } from 'react';

import _ from 'lodash';
import {Responsive, WidthProvider } from 'react-grid-layout';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Image} from 'react-bootstrap';
import styles from './Section3.scss'

const ResponsiveReactGridLayout = WidthProvider(Responsive);


class Section3 extends Component {  

  static propTypes = {
    onLayoutChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: "layout",
    isResizable: false,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: {lg: 12, md: 12, sm: 6, xs: 4, xxs: 2},
    
    
  };
   state = {
    currentBreakpoint: 'lg',
    mounted: false,
    
  };

  componentDidMount() {
    this.setState({mounted: true});
  }

  onLayoutChange = (layout) => {
    this.props.onLayoutChange(layout);
  };
  

    

 onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts);
  };



 

  render() {
   
    return (
    <Grid className={styles.sections3}>
      <Row className={styles.heading}>
        <Col xs={12} md={12}>
          <p className={styles.bigHead}>our moms said, we are the best.</p>
        </Col>      
        </Row>
      
      <Row>
        <ResponsiveReactGridLayout  layouts={this.state.layouts}  onLayoutChange={this.onLayoutChange} rowHeight={30}>
          <div key={'1'} data-grid={{x: 0, y: 0, w: 3, h: 9}}><Image src="assets/images/Home/section3/img1.png" className={styles.imgfull} /></div>
          <div key={'2'} data-grid={{x: 3, y: 0, w: 3, h: 9}}><Image src="assets/images/Home/section3/img2.png" className={styles.imgfull} /></div>
          <div key={'3'} data-grid={{x: 6, y: 0, w: 3, h: 9}}><Image src="assets/images/Home/section3/img3.png" className={styles.imgfull} /></div>
          <div key={'4'} data-grid={{x: 10, y: 0, w: 2, h: 2 , static: true}}><p  className={styles.p}>Transform brands, grow businesses and make people’s lives better.</p></div>
        </ResponsiveReactGridLayout>
      </Row>
    </Grid>
     
    );
  }
}

export default Section3;
