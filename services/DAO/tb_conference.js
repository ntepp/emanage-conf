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

exports.insert = insert;
exports.select = select;
