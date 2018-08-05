var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection info for the sql database
var connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

//connect to the mysql server and database
connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connected!");
});

