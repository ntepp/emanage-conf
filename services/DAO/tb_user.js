var insert = function insert(connection, userData){
	connection.query('INSERT INTO user SET ?', userData, function(err, rows, fields) {
		  if (!err)
		    console.log('The solution is: ', rows);
		  else
		    console.log('Erreur lors de inscription du nouvel user.\n' +err);	
	});
	
}


var select = function select(connection){ 
	connection.query('SELECT * FROM user', function(err, result, item){
	  if(err){
	      console.log('Error selecting nom in TABLE user');
	      return;
	  }else{
	    for (var i = result.length - 1; i >= 0; i--) {
	      console.log(result[i].nom);
	    };
	  }
	});
}

var selectByValidation = function selectByValidation(connection, paramValid, callback){
	
	 connection.query('SELECT * FROM user WHERE validation = ?',paramValid, 
		function(err, result, item){
		  if(err){
		  	callback(err,null);
		      console.log('Error selecting nom in TABLE user '+ err );
		      return;
		  }else{
		  	callback(null,result);
		  /* for (var i = result.length - 1; i >= 0; i--) {
		      console.log("Login: "+result[i].login+"\n"+"Email: "+result[i].email);
		     
		    };   */
		  }
		 
		});

}

var selectByValidationU = function selectByValidationU(connection, id, callback){
	
	 connection.query('SELECT * FROM user WHERE id = ?', [id], function(err, result, item){
		  if(err){
		  	callback(err,null);
		      console.log('Error selecting name in TABLE user '+ err );
		      return;
		  }else{
		  	callback(null,result);
		  /* for (var i = result.length - 1; i >= 0; i--) {
		      console.log("Login: "+result[i].login+"\n"+"Email: "+result[i].email);
		     
		    };   */
		  }
		 
		});

}

var selectByToken = function selectByToken(connection, paramValid, callback){
	
	 connection.query('SELECT * FROM user WHERE token = ?',paramValid, 
		function(err, result, item){
		  if(err){
		  	callback(err,null);
		      console.log('Error selecting nom in TABLE user '+ err );
		      return;
		  }else{
		  	callback(null,result);
		  /* for (var i = result.length - 1; i >= 0; i--) {
		      console.log("Login: "+result[i].login+"\n"+"Email: "+result[i].email);
		     
		    };   */
		  }
		 
		});

}

var selectByLoginAnPwd = function selectByLoginAnPwd(connection, login, email, callback){
	
	 connection.query('SELECT * FROM user WHERE login = ? OR email = ?',[login,email], 
		function(err, result, item){
		  if(err){
		  	callback(err,null);
		      console.log('Error selecting name in TABLE user '+ err );
		      return;
		  }else{
		  	callback(null,result);
		  	for (var i = result.length - 1; i >= 0; i--) {
		      console.log("id: "+result[i].id+"Login: "+result[i].login+"\n"+"Email: "+result[i].email);
		     
		    };  
		  }
		 
		});

}

var selectByLoginEmailAnPwd = function selectByLoginEmailAnPwd(connection, password, login, callback){
	
	 connection.query('SELECT * FROM user WHERE password = ? AND login = ? OR password = ? AND email = ?',[password, login, password, login], 
		function(err, result, item){
		  if(err){
		  	callback(err,null);
		      console.log('Error selecting name in TABLE user '+ err );
		      return;
		  }else{
		  	callback(null,result);
		  	for (var i = result.length - 1; i >= 0; i--) {
		      console.log("Login: "+result[i].login+"\n"+"Email: "+result[i].email);
		     
		    };  
		  }
		 
		});

}

var selectByEmail = function selectByEmail(connection, email, callback){
	
	 connection.query('SELECT * FROM user WHERE email = ?',[email], 
		function(err, result, item){
		  if(err){
		  	callback(err,null);
		      console.log('Error selecting name in TABLE user '+ err );
		      return;
		  }else{
		  	callback(null,result);
		  	for (var i = result.length - 1; i >= 0; i--) {
		      console.log("Login: "+result[i].login+"\n"+"Email: "+result[i].email);
		     
		    };  
		  }
		 
		});

}
var updateByValidation = function updateByValidation(connection, userData, id){
	connection.query('UPDATE user SET ? WHERE id = ?', [userData, id], function(err, rows, fields) {
		  if (!err)
		    console.log('The solution is: ', rows);
		  else
		    console.log('Erreur lors de inscription du nouvel user.\n' +err);	
	});

}


var deletes = function delate(connection){

}

exports.select = select;
exports.insert = insert;
exports.selectByValidation = selectByValidation;
exports.updateByValidation = updateByValidation;
exports.selectByLoginAnPwd = selectByLoginAnPwd;
exports.selectByLoginEmailAnPwd = selectByLoginEmailAnPwd;
exports.selectByEmail = selectByEmail;
exports.selectByToken = selectByToken;
exports.selectByValidationU = selectByValidationU;