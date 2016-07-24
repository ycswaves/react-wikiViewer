import Axios from 'axios'
import FetchJsonp from 'fetch-jsonp'
import * as Types from './actionTypes'

function requestData() {
  return {type: Types.REQ_DATA}
}

function receiveData(data) {
  return{
    type: Types.RECV_DATA,
    data
  }
}

//npm install es6-promise for old browsers
function receiveError(data) {
  return {
    type: Types.RECV_ERROR,
    data
  }
}

export function jsonp(url) {
  return dispatch => {
    dispatch(requestData());
    return FetchJsonp(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data)
      dispatch(receiveData(data));
    })
    .catch(function(err){
      if (err) {
        dispatch(receiveError(err));
      }
    })
  }
}

export default function (url, params = {}) {
  return dispatch => {
    dispatch(requestData());
    return Axios({
      url,
      //timeout: 20000,
     // method: 'get',
      responseType: 'json',
      ...params
    })
    .then(function(response) {
      dispatch(receiveData(response.data));
    })
    .catch(function(err){
      console.log(err)
      dispatch(receiveError(err));
    })
  }
}