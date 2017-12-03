import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class PadOperator extends React.Component {

  render() {
    return (
      <div className="pad operator">
        {this.props.value}
      </div>
    );
  }
}

//default PropTyps

PadOperator.defaultProps = {
  value: ""
};

PadOperator.propTypes = {
  value: PropTypes.string.isRequired
  // fct: PropTypes.func
};
