import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

//connect the id of the curriculum, retrun the name and description depending on id

class Year extends React.Component {
  render() {
    let curriculum_id = this.props.match.params.year_id;
    let curriculum = this.props.curriculum.filter(function(c) {
      return c.id === curriculum_id;
    })
    return (
      <div>
        <h2>{curriculum.name}</h2>
        <h3>{curriculum.description}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    curriculum: state.curriculum[0]
  }
}

export default withRouter(connect(mapStateToProps)(Year));