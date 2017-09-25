import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}

Title.defaultProps = {
  name: "Holberton School"
}

Title.propTypes = {
  name: PropTypes.string
};
