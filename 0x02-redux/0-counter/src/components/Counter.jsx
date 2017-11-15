import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: props.initValue
    };
  }
  onClick(){
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    return (
      <div>
        {this.state.value}
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
