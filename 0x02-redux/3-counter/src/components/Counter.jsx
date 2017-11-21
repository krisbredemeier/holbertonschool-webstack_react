import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {

  render() {
    return (
      <div>
        {this.prop.value}
        <button onClick={this.onClick.bind(this)}>New value</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  value: 0
};

Counter.propTypes = {
  value: PropTypes.number.isRequired
};
