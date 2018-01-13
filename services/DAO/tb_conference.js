var result1, stat;
var insert = function insert(connection, userData){ 
	connection.query('INSERT INTO conference SET ?', userData, function(err, rows, fields) {
		  if (!err){
				console.log('The solution is: ', rows);
				this.stat = true;
		  }else{
				console.log('error while inserting a new conference.\n' +err);	
				this.stat = false;
			}
	});
	return stat;
}

var select = function select(connection, callback){ 	
	connection.query('SELECT * FROM conference', function(err, result, item){
	  if(err){
	      console.log('Error selecting nom in TABLE user');
	      return;
	  }else{
	    for (var i = result.length - 1; i >= 0; i--) {
	      console.log(result[i].conferenceType);
			};
			callback(null, result);
	  }
	});
}

var selectById = function selectById(connection, id, callback){
    connection.query('SELECT * FROM conference WHERE conferenceId = ?', [id], function(err, result, item){
        if(err){
            callback(err,null);
            console.log('Error '+ err );
            return;
        }else{
            callback(null,result);
        }

    });

}

var selectByConference = function selectByConference(connection, id, callback){

    connection.query('SELECT * FROM conference WHERE conferenceNbrVisitor = ?', [id], function(err, result, item){
        if(err){
            callback(err,null);
            console.log('Error '+ err );
            return;
        }else{
            callback(null,result);
        }

    });

}

var update = function update(connection, categorieData){
    connection.query('UPDATE conference SET ? ', categorieData , function(err, rows, fields) {
        if (!err)
            console.log('update rows: ', rows);
        else
            console.log('Erreur lors de la mise à jour.\n' +err);
    });
}

exports.insert = insert;
exports.select = select;
exports.selectById = selectById;
exports.selectByConference = selectByConference;
exports.update = update;