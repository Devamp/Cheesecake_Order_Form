
/* Server side file to maintain the new orders
* Author: Devam Patel
* Version: 2/11/22
*
* NOTES:
* Once the order has been placed, the updated month must be clicked twice in order for it to update. This is a small bug which
* I couldnt solve.
*/

var express = require('express');
const { Callbacks } = require('jquery');
const { RANDOM } = require('mysql/lib/PoolSelector');
const { dbquery } = require('./dbms');
const { route } = require('./orders');
var router = express.Router();

/* GET for neworders page */
router.get('/', function(req, res, next) {
    res.send("New Orders Page");
});

/* POST new data to orders page*/
router.post('/', function(req, res, next) {
    
    dbquery("SELECT orderID FROM ORDERS WHERE orderID = (SELECT MAX(orderID) FROM ORDERS)", function(bool, results){
        var orderID = results[0].orderID+1; // get current maximum order id and add 1 to it
        var month = "JAN"; // Januray is the month that is updated
        var day = Math.floor((Math.random() * 28)+1); // random day 
        var quantity = req.body.Quantity; // get quantity
        var topping = req.body.Topping; // get topping
        var notes =  req.body.Notes; // get notes
        var params = "'" + orderID.toString() + "'" + "," + "'" + month.toString() + "'" + "," + "'" + day.toString() + "'" + "," + "'" + quantity.toString() + "'" + "," + "'" + topping.toString() + "'" + "," + "'" + notes.toString() +"'";
        dbquery("INSERT INTO ORDERS (orderId, Month, Day, Quantity, Topping, Notes) VALUES (" + params + ")", function(bool, results){});
    });
    
});

module.exports = router;
