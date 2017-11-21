import React from 'react';
import PropTypes from 'prop-types';

export default class Result extends React.Component {

  render() {
    return (
      <div className="result">
        {this.prop.value}
      </div>
    );
    }
  }

Result.defaultProps = {
  value: 0
};

Result.propTypes = {
  value: PropTypes.number.isRequired
};
