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
  name: 0
}

Title.propTypes = {
  name: PropTypes.number
};
