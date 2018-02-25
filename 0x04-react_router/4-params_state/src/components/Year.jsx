import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

//connect the id of the curriculum, retrun the name and description depending on id

class Year extends React.Component {
  render() {
    let curriculum_id = this.props.match.params.year_id;
    let the_curriculum = this.props.curriculum.filter(function(current_curriculum) {
      return current_curriculum.id === curriculum_id;
    })
    return (
      <div>
        <h2>{the_curriculum.name}</h2>
        <h3>{the_curriculum.description}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { curriculum: state.curriculum };
}

export default withRouter(connect(mapStateToProps)(Year));