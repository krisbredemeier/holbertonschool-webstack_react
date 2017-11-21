import React from 'react';
import CounterContainer from '../containers/Counter.jsx';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from './Button.jsx';
import CounterContainer, { increment, decrement } from '../containers/Counter.jsx'



export default class App extends React.Component {
  displayName: 'Counter'
  render () {
    const { increment, decrement, count } = this.props;
    return(
      <div>
        Current counter value: {count}
        <Button text="Increment" fct={()=>this.props.increment()} />
        <Button text="Decrement" fct={()=>this.props.decrement()} />
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    increment: increment,
    decrement: decrement
  },
    dispatch);
}

export default connect(null, mapDispatchToProps)(App);
