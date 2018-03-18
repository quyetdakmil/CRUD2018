// // Load module
// var mysql = require('mysql');
// // Initialize pool
// var pool      =    mysql.createPool({
//     host     : '127.0.0.1',
//     user     : 'root',
//     database : 'showbiz',
//     debug    :  false
// });
// module.exports = pool;

// Load module
var mysql = require('mysql');
// Initialize pool
var pool      =    mysql.createPool({
    host     : 'sql2.freemysqlhosting.net',
    user     : 'sql2226375',
   	password : 'dT1!lD3%',
    database : 'sql2226375',
    debug    :  false
});
module.exports = pool;