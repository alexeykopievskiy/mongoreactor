const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server


export default class DB {

  constructor(){
    this.MongoConnect = null
    this.serverAddr = null
    this.serverPort = null
  }

  static connect(params){
    this.serverAddr = params.server_url;
    this.serverPort = params.server_port;

    this.connectDB(this.serverAddr, this.serverPort);
  }

  static connectDB(server_url, server_port){
    this.MongoConnect = new MongoClient(new Server(`${server_url}`, server_port), {native_parser: true})
    console.log(MongoClient);
  }

  static disconnectDB(){

  }
}
