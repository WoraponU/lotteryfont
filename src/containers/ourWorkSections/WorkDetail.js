import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { WorkDetailComponent } from 'Components/ourWorkSections'
import { withLang } from '../../hocs';


class WorkDetail extends Component {
  render() {
    const { lang } = this.props;
    
    return (
      <WorkDetailComponent lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('ourWorks/WorkDetail')
);

export default enhance(WorkDetail);

