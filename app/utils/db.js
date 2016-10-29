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

    this.connectDB(this.serverAddr, this.serverPort);
  }

  static connectDB(server_url, server_port){
    MongoClient.connect(`mongodb://${server_url}:${server_port}/test`, (error, database) => {
      this.MongoError = error;
      this.MongoConnect = database;
    })

  }

  static disconnectDB(){

  }
}
