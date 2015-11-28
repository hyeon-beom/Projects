exports.getUsers = function(callback)
{
    var mysql = require('mysql');
    var connection = mysql.createConnection(
        {
            host: 'ec2-52-68-120-13.ap-northeast-1.compute.amazonaws.com',
            user: 'root',
            password : 'root'
        });
    connection.connect();
    connection.query('Call meme.sp_select_user()', function (err, results, fields) {
        if (err)
            throw err;
        
        var result = {
            title: '난 할 수 있다!!!',
            rows: results[0]            //여러개 레코드셋이 가능하네? 좋아좋아
        };

        callback(result);

    });
}

exports.insert = function (body, callback){
    
    var mysql = require('mysql');
    var connection = mysql.createConnection(
        {
            host: 'ec2-52-68-120-13.ap-northeast-1.compute.amazonaws.com',
            user: 'root',
            password : 'root'
        });
    connection.connect();
    connection.query("CALL  meme.sp_insert_user('" + body.name + "') ", function (err, results, fields) {
        if (err)
            throw err;
        
        callback(results);
        
    });

}