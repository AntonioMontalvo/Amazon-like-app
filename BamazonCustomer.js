//npm install mysql
//npm install inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');
var productsID;

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

    inquirer.prompt([
		{
			name: "ID",
			message: "What's the ItemID of the product you would like to purchase?"
		},
		{
			name: "Units",
			message: "How many units of this product would you like to purchase?"
		}
	]).then(function(answer) {
		var selected = answer.ID ;
		connection.query('SELECT * FROM Products WHERE ItemID = ?', selected, function(err, res) {
			if(res[0].StockQuantity >= answer.Units){
				console.log('Congratulations on your purchase! The total cost is $' + res[0].Price * answer.Units);
				var leftInStock = res[0].StockQuantity - answer.Units;
				connection.query('UPDATE Products SET ? WHERE ?', [{
					StockQuantity: leftInStock
				},
				{
					ItemID: answer.ID	
				}], function(err, res) {}
					);
			}else{
				console.log("We apologize but don't have that many items in stock!");
				return;
			}
		})
	});
});


