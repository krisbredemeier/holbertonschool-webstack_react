import React from 'react';
import PropTypes from 'prop-types';

export default class PadNumber extends React.Component {

  render() {
    return (
      <div className="pad">
        {this.props.value}
      </div>
    );
  }
}

//default PropTyps

PadNumber.defaultProps = {
  value: 0
};

PadNumber.propTypes = {
  value: PropTypes.number.isRequired
  // fct: PropTyps.func
};
