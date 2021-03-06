import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
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
