import React from 'react';
import PropTypes from 'prop-types';

export default class PadOperator extends React.Component {

  render() {
    return (
      <div className="pad operator">
        {this.prop.value}
      </div>
    );
  }
}

// PadOperator.defaultProps = {
//   value: 0
// };

PadOperator.propTypes = {
  value: PropTypes.number.isRequired
  // fct: PropTypes.func
};
