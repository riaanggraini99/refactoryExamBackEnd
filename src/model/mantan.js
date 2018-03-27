module.exports = function () {

    var db = require('./../libs/connection-db')();
    var Schema = require('mongoose').Schema;
  
    var mantan = Schema({
      nama: String,
      alamat: String,
      status: Boolean,
    });
  
    return db.model('mantans', mantan);
  
  }
  
