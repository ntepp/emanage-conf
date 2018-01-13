var insert = function insert(connection, name) {
    connection.query('INSERT INTO type SET ?', name,function (err, rows, fields) {
        if (!err){
            console.log('The solution is: ', rows);
        }else{
            console.log('Erreur lors de inscription du nouvel user.\n' +err);
        }
    })
}

var select = function select(connection){
    connection.query('SELECT * FROM type', function(err, result, item){
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

var selectById = function selectByValidationU(connection, id, callback){

    connection.query('SELECT * FROM type WHERE id = ?', [id], function(err, result, item){
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

var update = function update(connection, userData, id){
    connection.query('UPDATE type SET ? WHERE id = ?', [userData, id], function(err, rows, fields) {
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Erreur lors de inscription du nouvel user.\n' +err);
    });

}

exports.select = select;
exports.insert = insert;
exports.selectById = selectById;
exports.update = update;
