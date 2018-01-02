var mysql = require('mysql');

var createMysqlConnection = function(){
    con = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Prestashop123',
        database : 'econference'
    });
    return con;
}

var connectDB = function connectDB(connection){
    //ouverture de la connection à la BD
    connection.connect(function(err){
        if(err){
                console.log("following error occure while connecting to the db "+err );
                return false;
        }
        console.log('DB Connection established');
        
    });
}

var closeDB = function closeDB(connection){
    //closing connection to the db
    connection.end(function(err) {
            console.log("connection to DB closed...");
        });
}


exports.createMysqlConnection = createMysqlConnection;
exports.connectDB = connectDB;
exports.closeDB = closeDB;