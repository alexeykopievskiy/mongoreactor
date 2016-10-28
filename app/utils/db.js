

export default class DB {

  static connect(params){
    const connectUrl = `mongodb://${params.server}:${params.port}/${params.database}`
    return this.connectDB(connectUrl, params.database)
  }

  static connectDB(connectUrl, dbName){

  }
}
