/////////////////////////////
//     CUSTOMER VIEW       //
/////////////////////////////	
//npm install mysql
//npm install inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');
var productsID;

var mysql = require('mysql') ;
var connection = mysql.createConnection({//this is how we connect node with mysql
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "password", //Your password
    database: "BamazonDB"
})

connection.connect(function(err) {
    if (err) throw err;
});

connection.query('SELECT * FROM Products', function(err, res) {//this how we query the Producs TABLE
    if (err) throw err;
    console.log(res);//get the response

    inquirer.prompt([//we usr inquirer to get customer input
		{
			name: "ID",
			message: "What's the ItemID of the product you would like to purchase?"
		},
		{
			name: "Units",
			message: "How many units of this product would you like to purchase?"
		}
	]).then(function(answer) {//results from prompting are stored in answer
		var selected = answer.ID ;
		connection.query('SELECT * FROM Products WHERE ItemID = ?', selected, function(err, res) {//we access mysql and get the ItemID and store it in res
			if(res[0].StockQuantity >= answer.Units){
				console.log('Congratulations on your purchase! The total cost is $' + res[0].Price * answer.Units);
				var leftInStock = res[0].StockQuantity - answer.Units;
				connection.query('UPDATE Products SET ? WHERE ?', [{//we update our Products TABLE
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


