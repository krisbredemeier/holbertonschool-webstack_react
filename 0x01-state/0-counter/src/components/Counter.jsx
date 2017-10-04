import PropTypes from 'prop-types';

class Counter extends React.Component {
  render() {
    return (
    <div>
      <h1>{this.props.value}</h1>
    </div>
    );
  }
}

Counter.defaultProps = {
  value: 0
};

Counter.propTypes = {
  PropTypes.number.isRequired
};
