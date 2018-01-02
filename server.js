var express=require('express');
var bodyParser = require('body-parser');
/* Import module to connect mysql db */
var mysql = require('mysql');
var connection = require('./services/DAO/db_connection');
var conference = require('./services/DAO/tb_conference');
/* create express app*/
var app = express();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Try db connection*/
con = connection.createMysqlConnection();
bool = connection.connectDB(con);

app.post('/BO/Event/create', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = conference.insert(con, req.body);
        console.log(result);
        res.send({"state":result});
    }else{
        res.send({"state":false});
    }
    connection.closeDB(con);
})

app.get('/BO/Event/selectAll', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = conference.select(con, function(err,data){
            if (err) {
              // error handling code goes here
              console.log("ERROR : ",err);            
          } else {            
              
            res.send({"state":true, "value": data});             
            console.log("result from db for tocken is : ",data);   
          }    
        });
       
    }else{
        res.send({"state":false});
    }
    connection.closeDB(con);
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})