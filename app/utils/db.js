const MongoClient = require('electron').remote.require('mongodb').MongoClient;


export default class DB {

  constructor(){
    this.MongoConnect = null
    this.MongoError = null
    this.serverAddr = null
    this.serverPort = null
  }

  static connect(params, auth){

    let connectUrl = null

    this.serverAddr = params.server_url;
    this.serverPort = params.server_port;
    this.authSource = params.auth_source;

    if(auth){
      this.userName = params.user_name || '';
      this.userPassword = params.user_password || '';
      this.authMechanism = params.auth_mechanism || '';

      connectUrl = `mongodb://${this.userName}:${this.userPassword}@${this.serverAddr}:${this.serverPort}?${this.authMechanism}&${this.authSource}`;
    }
    else{
      connectUrl = `mongodb://${this.serverAddr}:${this.serverPort}?${this.authSource}`;
    }

    return this.connectDB(connectUrl);
  }

  static connectDB(params){
    console.log(params, 'iiii');
    return new Promise((resolve, reject) => {
      /*MongoClient.connect(`mongodb://${server_url}:${server_port}/test`, (error, database) => {
        this.MongoError = error;
        this.MongoConnect = database;
        resolve(database)
      })*/
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
