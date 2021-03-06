import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: 89
    };
  }

  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

// Counter.defaultProps = {
//   value: 0
// };

Counter.propTypes = {
  value: PropTypes.number.isRequired
};
