import React, { Component } from 'react';
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { HelloFriendComponent } from 'Components/aboutSections'
import { withLang } from 'Hocs';


class HelloFriend extends Component {
  render() {
    const { lang } = this.props;
    
    return (
      <HelloFriendComponent lang={lang} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('about/HelloFriend')
);

export default enhance(HelloFriend);

