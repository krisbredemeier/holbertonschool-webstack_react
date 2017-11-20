import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {

  render() {
    return (
      <div>
        {this.prop.value}
        <button onClick={()=>this.props.increment()}>New value</button>
      </div>
    );
  }
}

export functino increment(){
  return {
    type: 'INCREMENT',
  }
};

Counter.defaultProps = {
  value: 0
};

Counter.propTypes = {
  value: PropTypes.number.isRequired
};
