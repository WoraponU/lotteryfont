import React, { Component } from 'react'


const withLang = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {

    }
    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
}

export default withLang