/*const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server*/

const MongoClient = require('electron').remote.require('mongodb').MongoClient;
const Server = require('electron').remote.require('mongodb').Server;

console.log(MongoClient, Server, '1-2');


export default class DB {

  constructor(){
    this.MongoConnect = null
    this.serverAddr = null
    this.serverPort = null
  }

  static connect(params){
    console.log(params, 'para');
    this.serverAddr = params.server_url;
    this.serverPort = params.server_port;

    this.connectDB(this.serverAddr, this.serverPort);
  }

  static connectDB(server_url, server_port){
    console.log(server_url, server_port, 'connectDb');
    this.MongoConnect = MongoClient.connect('mongodb://localhost:27017/test', (error, db) => {
      console.log(error, 'err');
      console.log(db, 'db');
    })
    /*this.MongoConnect.connect().then(response => {
      console.log(response, 'response');
    })*/
    console.log(this.MongoConnect.collection(), 'log');

  }

  static disconnectDB(){

  }
}
