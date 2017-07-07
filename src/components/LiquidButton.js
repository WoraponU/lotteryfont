import { Component } from 'react';
import LiquidButton from '../../src/lib/liquidButton';

// import '../../src/lib/liquidButton';
import './LiquidButton.scss'

class liquidButton extends Component {
  componentDidMount() {
    const { radius, color1, color2, color3 } = this.props;
    console.log(this.props.radius)
    const params = {
      radius,
      color1,
      color2,
      color3,
    };
    console.log(params);
    new LiquidButton(params);
  }

  render() {
    return (
      null
    );
  }
}

// liquidButton.defaultProps = {
//   name: 'Mary'
// };

export default liquidButton;
