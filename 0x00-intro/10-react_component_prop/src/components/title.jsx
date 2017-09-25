import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    return (
      <h1>Welcome to Holberton School {this.props.name}</h1>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string
};
