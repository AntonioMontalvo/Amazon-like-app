/////////////////////////////
//     MANAGER VIEW        //
/////////////////////////////	
//npm install mysql
//npm install inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({//mysql-node connection
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "password", //Your password
    database: "BamazonDB"
});


function ask() {
		inquirer.prompt([ //ask questions
		  {
		    type: 'checkbox',
		    message: 'Manager, choose from the menu options!',
		    name: 'List',
		    choices: [
		      new inquirer.Separator(' SELECT FROM THE OPTIONS BELOW  '),
		      {
		        name: 'View Products for Sale'
		      },
		      {
		        name: 'View Low Inventory'
		      },
		      {
		        name: 'Add to Inventory'
		      },
		      {
		        name: 'Add New Product'
		      },
		    ]  
		  }
		]).then(function (answers) { //
			if(answers.List[0] == 'View Products for Sale' ){
				
				connection.query('SELECT * FROM Products', function(err, res) {//get the products from the Products table
				    if (err) throw err;
					    for( var i = 0; i < res.length; i++){
					    	console.log('Product Name: '+ res[i].ProductName +" | "+ "Product Price: $" + res[i].Price + " | " + "In Stock: " +res[i].StockQuantity);
					    	console.log("");
					    }
					    ask();
				})
			}

			if(answers.List[0] == 'View Low Inventory'){//get the Product name that passes the test

				connection.query('SELECT ProductName FROM Products WHERE StockQuantity  < 5', function(err, res) {
					if (err) throw err;
						console.log('On this products we less than five available in stock');
					    for( var i = 0; i < res.length; i++){
					    	console.log(res[i].ProductName);
					    	console.log("");
					    }
					    ask();
				})
			}

			if (answers.List[0] == 'Add to Inventory'){

				inquirer.prompt([
					{
						name: "ItemID",
						message: "What's the ItemID?"
					},
					{
						name: "InStockNow",
						message: "How many in stock now?"
					},
					{
						name: "StockQuantity",
						message: "How many items are you going to add?"
					}
				]).then(function(answer) {

					connection.query("UPDATE products SET ? WHERE ?", [{//update database
						    StockQuantity:  parseInt(answer.StockQuantity) + parseInt(answer.InStockNow)
						}, {
						    ItemID: answer.ItemID
						}], function(err, res) {
							if (err) throw err;
						ask();
						});
				})
			}


			if(answers.List[0] == 'Add New Product'){//add to database
			
				inquirer.prompt([
					{
						name: "ProductName",
						message: "What's the product's name?"
					},
					{
						name: "DepartmentName",
						message: "What department?"
					},
					{
						name: "Price",
						message: "Price?"
					},
					{
						name: "StockQuantity",
						message: "How Many"
					}
				]).then(function(answer) {
					var newProduct = {
						ProductName: answer.ProductName, 
						DepartmentName: answer.DepartmentName, 
						Price: answer.Price,
						StockQuantity: answer.StockQuantity
					};	

					connection.query('INSERT INTO products SET ?', newProduct, function(err, res) {
						if (err) throw err;
						ask();
					})

			})			
		}
	});
}
ask();		