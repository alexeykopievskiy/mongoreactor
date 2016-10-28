import * as constants from '../constants/connect.const'

export function connectDB(){
  return {
    type: constants.CONNECT
  }
}
