import * as constants from '../constants/connect.const'
import DB from '../utils/db'

export function connectDB(){

  // test case
  DB.connect({server_url: 'localhost', server_port: 27017}).then(() => {
    DB.listAllDatabase()
  });
  return {
    type: constants.CONNECT
  }
}
