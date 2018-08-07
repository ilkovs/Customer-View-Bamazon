# Customer-View-Bamazon

**Description**

This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents customer interface.

**MySQL Database**

Setup MySQL on your computer in order to run the application. Once installed, you will be able to create Bamazon Database with the products column thanks to the code in file bamazon.sql. Run the code in MySQL and you will be able to run the Customer interface.

**Customer Interface**

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

1. git clone git@github.com:ilkovs/Customer-View-Bamazon.git
2. cd Customer-View-Bamazon
3. npm install mysql; npm install inquirer
4. node bamazonCustomer.js
5. The Items for Sale option allows you to view the current inventory of store items: item IDs, department in which the item is located, price, and the quantity available in stock.

## Screenshots from the APP 

**From 1 - 3 (showing the successful order)**

![GitHub Logo](/screenshots/Capture1.PNG)
Format: ![Picking a product](url)

![GitHub Logo](/screenshots/Capture2.PNG)
Format: ![How many units of the item](url)

![GitHub Logo](/screenshots/Capture3.PNG)
Format: ![Successful order with total cost](url)

**4-5 (showing unsuccessfull order that prompts to modify)**

![GitHub Logo](/screenshots/Capture4.PNG)
Format: ![Unsuccessful order Part 1](url)

![GitHub Logo](/screenshots/Capture5.PNG)
Format: ![Unsuccessful order Part 2](url)
