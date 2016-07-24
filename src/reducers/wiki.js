import * as Types from '../actions/actionTypes'

function wikiResult(state = [], action){
  switch (action.type) {
    case Types.REQ_DATA:
      
      return state

    case Types.RECV_DATA:
      console.log(data)
      return action.data
    

    default:
      return state
  }
}

export default wikiResult