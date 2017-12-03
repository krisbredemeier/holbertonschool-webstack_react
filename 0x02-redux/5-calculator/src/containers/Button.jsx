import React, { Component } from 'react';

class Button extends React.Component {
  displayName: 'Button'
  render () {
    return(
      <div>
        <div><button onClick={(e) => this.props.fct()}>{this.props.text}</button></div>
      </div>
    );
  }
};

export default Button;
