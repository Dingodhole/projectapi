import {loading, error, baseUrl} from './utils'
import axios from 'axios'

import history from '../history'

export const newData = ( data ) => {
  return {
    type: 'NEW_DATA',
    data
  }
}

export const newPost = ( postObject ) => {
  return (dispatch) => {
    dispatch(loading(true))
    axios.post(`${baseUrl}/api`, {
      ...postObject
    })
    .then(({data}) => {
      dispatch(newData([data  ]))
      dispatch(loading(false))
      history.push('/')
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}
