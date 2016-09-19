/////////////////////////////
//     MANAGER VIEW        //
/////////////////////////////	
//npm install mysql

var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "password", //Your password
    database: "BamazonDB"
});


function ask() {
		inquirer.prompt([
		  {
		    type: 'checkbox',
		    message: 'Manager, choose from the menu options!',
		    name: 'List',
		    choices: [
		      new inquirer.Separator(' = Options = '),
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
		]).then(function (answers) {
			if(answers.List[0] == 'View Products for Sale' ){
				
				connection.query('SELECT * FROM Products', function(err, res) {
				    if (err) throw err;
					    for( var i = 0; i < res.length; i++){
					    	console.log('Product Name: '+ res[i].ProductName +" | "+ "Product Price: $" + res[i].Price + " | " + "In Stock: " +res[i].StockQuantity);
					    	console.log("");
					    }
					    ask();
				})
			}

			// if(answers.List[0] == 'View Low Inventory'){

			// }

		});
}
ask();		