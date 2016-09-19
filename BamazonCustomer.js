//npm install mysql

var mysql = require('mysql') ;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "password", //Your password
    database: "BamazonDB"
})

connection.connect(function(err) {
    if (err) throw err;
});

connection.query('SELECT * FROM Products', function(err, res) {
    if (err) throw err;
    console.log(res);
})