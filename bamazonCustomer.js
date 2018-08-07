var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection info for the sql database
var connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

//connect to the mysql server and database
connection.connect(function(err) {
    if (err) throw err;
    console.log("\n--------------------------------------------------\n");
    // console.log("You are connected!");

});


//list all items for sale from the DB
function itemsForSale() {
    connection.query(
       "SELECT item_id, product_name, price FROM products",
       function(err, result) {
           if (err) throw err;

           console.log(result);
        }
    )
};

//Promp the customer
promptToPurchase();

//create the Prompt Function
function promptToPurchase() {
    itemsForSale();
inquirer
    .prompt([
        {
            name: "item_id",
            type: "input",
            message: "Type the ID of the product that you would like to buy:"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units of the item you would like to buy ?"
        },

    ]).then(function(input) {

        var customerItem = input.item_id;
        var quantity = input.quantity;

        //check availability of the selected item
        var checkDB = "SELECT * FROM products WHERE ?";

        connection.query(checkDB, {item_id: customerItem}, function(err, data) {
            console.log(data[0]);
            if (err) throw err;

            //specify item from 1-10
            if (data.length === 0) {
                console.log("You have to select item between 1-10. Try again.");
                itemsForSale();

            } else {

                var productData = data[0];

                // the requested quantity should be below the one available in the inventory
                if (quantity <= productData.stock_quantity) {
                    
                    console.log("The item is in stock. Processing your order!");

                    // update the invetory after the order, subtract the ordered quantity from the inventory 
                    // var updateInventory = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + "WHERE item_id= " + customerItem;
                    
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                          {
                            stock_quantity: productData.stock_quantity - quantity
                          },
                          {
                            item_id: customerItem
                          }
                        ], 
                        function(err, data) {
                        if (err) throw err;

                        console.log("Your order has been received! Your total is $" + productData.price * quantity);
                        console.log("\n------------------------------------\n");
                        connection.end();

                    })

                } else {
                    console.log("We are sorry, we don't have enough items in stock, please modify your order.");
                    console.log("\n--------------------------------------\n");

                    itemsForSale();
                }
            }
        })
    })
}




