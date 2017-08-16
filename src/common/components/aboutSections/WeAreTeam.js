import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

import { CardTeam } from 'Components/common'
import { PopCircle } from 'Components/common';
import { blue } from 'Constants';

import './WeAreTeam.scss' ;

const WeAreTeamComponent = ({ lang: { weAreTeam: content }}) => {
  return (    
    <Grid className="weAreTeam">
      <Row className="text-center">
        <h1>{ content.header }</h1>
      </Row>
          <Row className="groupCardTeam">
            <CardTeam 
              img='/assets/images/about/weAreTeam/yuki.png' 
              title={content.title1}
              name={content.name1}
              rank={content.rank1}
            />
            <CardTeam 
              img='/assets/images/about/weAreTeam/yuki.png' 
              title={content.title2}
              name={content.name2}
              rank={content.rank2}
            />
            <CardTeam 
              img='/assets/images/about/weAreTeam/yuki.png' 
              title={content.title3}
              name={content.name3}
              rank={content.rank3}
            />  
            <CardTeam 
              img='/assets/images/about/weAreTeam/yuki.png' 
              title={content.title4}
              name={content.name4}
              rank={content.rank4}
            />
            
            <CardTeam 
              img='/assets/images/about/weAreTeam/yuki.png' 
              title={content.title5}
              name={content.name5}
              rank={content.rank5}
            />
            <CardTeam 
              img='/assets/images/about/weAreTeam/yuki.png' 
              title={content.title6}
              name={content.name6}
              rank={content.rank6}
            />   
            <CardTeam 
              img='/assets/images/about/weAreTeam/yuki.png' 
              title={content.title7}
              name={content.name7}
              rank={content.rank7}
            />
            <PopCircle color={blue} radius={88} position={["auto", "0px", "-110px", "auto"]}/>    
          </Row>
      
    </Grid>
  );
};

export default withRouter(WeAreTeamComponent);