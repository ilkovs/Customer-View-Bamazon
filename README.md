# Customer-View-Bamazon

**Description**

This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents customer interface.

**MySQL Database**

Setup MySQL on your computer in order to run the application. Once installed, you will be able to create Bamazon Database with the products column thanks to the code in file **bamazon.sql**. Run the code in MySQL and you will be able to run the Customer interface.

### Customer Interface

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

	git clone git@github.com:ilkovs/Customer-View-Bamazon.git
	cd Customer-View-Bamazon
	npm install mysql; npm install inquirer
	node bamazonCustomer.js
  
  The **Items for Sale** option allows you to view the current inventory of store items: item IDs, department in which the item is located, price, and the quantity available in stock.
