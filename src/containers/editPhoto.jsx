import React from 'react'
import '../../styles/form.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import EditPhotoForm from '../components/forms/editPhotoForm'

class EditPhoto extends React.Component {

  componentDidMount() {
    this.props.actions.getPhotoDetail(this.props.params.photoId)
  }

  handleSubmit(values) {
    console.log(values)
  }

  render() {
    return (
      <div className="form-container">
        <h2>Need to make some changes?</h2>
        {(this.props.photos.photoDetail) ? <EditPhotoForm photo={this.props.photos.photoDetail} handleSubmit={event => this.handleSubmit(event)} /> : 'Loading....'}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPhoto)