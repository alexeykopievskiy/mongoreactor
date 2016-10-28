import * as constants from '../constants/connect.const'

export default function connect(state = {}, action) {

  switch(action.type){
    case constants.CONNECT:
      return {
        ...state
      }
  }
  return state
}
