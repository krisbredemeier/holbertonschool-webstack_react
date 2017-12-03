import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PadNumber extends React.Component {

  render() {
    return (
      <div className="pad" onClick={()=>this.props.update(this.props.value)}>
        {this.props.value}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({
    update,
  }, dispatch);
}

//default PropTyps

PadNumber.defaultProps = {
  value: 0
};

PadNumber.propTypes = {
  value: PropTypes.number.isRequired
  // fct: PropTyps.func
};

export default connect(null, mapDispatchToProps)(PadNumber);
