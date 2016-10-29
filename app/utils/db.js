const MongoClient = require('electron').remote.require('mongodb').MongoClient;


export default class DB {

  constructor(){
    this.MongoConnect = null
    this.MongoError = null
    this.serverAddr = null
    this.serverPort = null
  }

  static connect(params){
    this.serverAddr = params.server_url;
    this.serverPort = params.server_port;

    return this.connectDB(this.serverAddr, this.serverPort);
  }

  static connectDB(server_url, server_port){
    return new Promise((resolve, reject) => {
      MongoClient.connect(`mongodb://${server_url}:${server_port}/test`, (error, database) => {
        this.MongoError = error;
        this.MongoConnect = database;
        console.log(this.MongoConnect, 'ddd');
        resolve(database)
      })
    })
  }

  static disconnectDB(){
    this.MongoConnect.close()
  }

  static listAllDatabase(){
    console.log(this.MongoConnect, 'mongoco');
    const admin = this.MongoConnect.admin()
    admin.listDatabases((error, databases) => {
      console.log(error, 'err');
      console.log(databases, 'dbs');
    })
  }
}
