// redux actions
import axios from 'axios'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const SIGNUP_USER = 'SIGNUP_USER'
export const ADD_NEW_PHOTO = 'ADD_NEW_PHOTO'
export const GET_PHOTOS = 'GET_PHOTOS'
export const GET_PHOTO_DETAIL = 'GET_PHOTO_DETAIL'
export const CLEAR_PHOTO = 'CLEAR_PHOTO'
export const GET_USER_PHOTO_LIST = 'GET_USER_PHOTO_LIST'


// gets photos by user
export function getUserPhotoList(userId) {
  const url = 'http://localhost:5000/users/' + userId + '/photos'
  const data = axios.get(url)

  return {
    type: GET_USER_PHOTO_LIST,
    payload: data
  }
}

// gets all photos
export function getPhotos() {

  const url = 'http://localhost:5000/photos'
  const data = axios.get(url)

  return {
    type: GET_PHOTOS,
    payload: data
  }
}


// clears photo
export function clearPhoto() {
  return {
    type: CLEAR_PHOTO
  }
}

// gets photo by id
export function getPhotoDetail(photoId) {

  const url = 'http://localhost:5000/photos/' + photoId
  const data = axios.get(url)

  return {
    type: GET_PHOTO_DETAIL,
    payload: data
  }
}


// posts new photo to server
export function addNewPhoto(userId, name, description, category, url) {

  const data = axios.post('http://localhost:5000/photos', {
    userId: userId,
    name: name,
    description: description,
    category: category,
    url: url
  })

  return {
    type: ADD_NEW_PHOTO,
    payload: data
  }
}


// posts new user to server
export function signUpUser(username, email, password) {

  const data = axios.post('http://localhost:5000/signup', {
    username: username,
    email: email,
    password: password
  })

  return {
    type: SIGNUP_USER,
    payload: data
  }
}

// log in user to server
export function logInUser(username, password) {

  // POST login credentials to server
  const data = axios.post('http://localhost:5000/login', {
    username: username,
    password: password
  })

  return {
    type: LOGIN_USER,
    payload: data
  }
}


// log out user
export function logOutUser(jwtToken) {

  const options = {
    auth_token: jwtToken
  }

  const data = axios.post('http://localhost:5000/logout', options)

  return {
    type: LOGOUT_USER,
    payload: data
  }
}
