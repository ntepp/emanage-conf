var express=require('express');
var bodyParser = require('body-parser');
/* Import module to connect mysql db */
var mysql = require('mysql');
var connection = require('./services/DAO/db_connection');
var conference = require('./services/DAO/tb_conference');
var participant = require('./services/DAO/tb_participant');
var entreprise = require('./services/DAO/tb_company');
var user = require('./services/DAO/tb_user');
var typeOfEvent = require('./services/DAO/tb_type');
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

// START WS for EVENT
app.post('/BO/Event/create', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = conference.insert(con, req.body);
        console.log(result);
        res.send({"state":result});
    }else{
        res.send({"state":false});
    }
    //connection.closeDB(con);
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
    //connection.closeDB(con);
})

app.post('/BO/Event/findById', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = conference.selectById(con, req.body.conferenceId,function(err,data){
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
    //connection.closeDB(con);
})

//START ENTERPRISE
app.post('/BO/Society/create', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = entreprise.insert(con, req.body);
        console.log(result);
        res.send({"state":result});
    }else{
        res.send({"state":false});
    }
    //connection.closeDB(con);
})

app.get('/BO/Society/selectAll', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = entreprise.select(con, function(err,data){
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
})

app.post('/BO/Society/findById', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = entreprise.selectById(con, req.body.companyId,function(err,data){
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
    //connection.closeDB(con);
})
// END ENTERPRISE


//START WS for Participant
app.post('/BO/Participant/create', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = participant.insert(con, req.body);
        console.log(result);
        res.send({"state":result});
    }else{
        res.send({"state":false});
    }
    //connection.closeDB(con);
})

app.get('/BO/Participant/selectAll', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = participant.select(con, function(err,data){
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
    //connection.closeDB(con);
})

app.post('/BO/Participant/findById', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = participant.selectById(con, req.body.participantId,function(err,data){
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
    //connection.closeDB(con);
})


app.post('/BO/Participant/findByUser', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = participant.selectByParticipant(con, req.body.userId,function(err,data){
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
    //connection.closeDB(con);
})

app.post('/BO/Participant/findByConference', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = participant.selectByConference(con, req.body.conferenceId,function(err,data){
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
    //connection.closeDB(con);
})

// END PARTICIPANT
// START WEB SERVICE for USER
app.post('/BO/User/create', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = user.insert(con, req.body);
        console.log(result);
        res.send({"state":result});
    }else{
        res.send({"state":false});
    }
    //connection.closeDB(con);
})

// END PARTICIPANT
// START WEB SERVICE for event type
app.post('/BO/Event/type/create', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = typeOfEvent.insert(con, req.body);
        console.log(result);
        res.send({"state":result});
    }else{
        res.send({"state":false});
    }
    //connection.closeDB(con);
})

app.post('/BO/Event/type/update', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    if(bool != false){
        result = typeOfEvent.update(con, req.body.name, req.body.id);
        console.log(result);
        res.send({"state":result});
    }else{
        res.send({"state":false});
    }
    //connection.closeDB(con);
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})