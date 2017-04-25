import React from 'react'
import '../../styles/photo_index.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import PhotoUserProfile from '../components/photoUserProfile.jsx'

class UserPhotoList extends React.Component {


  componentDidMount() {
    this.props.actions.getUserPhotoList(this.props.user.userId)
  }

  render() {
    return (
      <div>
        <h3>User Profile</h3>
        <div className="photos">
          {this.props.user.photos.map(photo => <PhotoUserProfile key={photo.id} photo={photo} deletePhoto={this.props.actions.deletePhoto } />)}
        </div>
      </div>
    )
  }
}

UserPhotoList.propTypes = {
  user: React.PropTypes.object
}

// maps the store state for user to UserPhotoList props
function mapStateToProps(state) {
  return {
    user: state.user
  }
}

// binds actions
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

// subscribes UserPhotoList to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(UserPhotoList)