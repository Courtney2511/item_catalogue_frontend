import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import '../styles/main.scss'
import Photos from './photos.jsx'
import NewPhoto from './newPhoto.jsx'
import mainLayout from './mainLayout.jsx'
import PhotoDetail from './photoDetail.jsx'
import PhotosByCategory from './PhotosByCategory.jsx'
import signUp from './signUp.jsx'
import masonryLayout from './masonryLayout.jsx'


export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={mainLayout}>
          <Route path="/" component={Photos} />
          <Route path="/photos/new" component={NewPhoto} />
          <Route path="/photos/:photo_id" component={PhotoDetail} />
          <Route path="/categories/:category_id" component={PhotosByCategory} />
          <Route path="/signup" component={signUp} />
          <Route path="/masonry" component={masonryLayout} />
        </Route>
      </Router>
    )
  }
}
