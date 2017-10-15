import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      x: props.initValue
    };
  }

  render() {
    return (
      <div>
        {this.props.value ? this.props.value : 0}
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
