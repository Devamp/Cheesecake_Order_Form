
/* Server side file to maintain the new orders
* Author: Devam Patel
* Version: 2/11/22
*
* NOTES:
* Once the order has been placed, the updated month must be clicked twice in order for it to update. This is a small bug which
* I couldnt solve. Additionaly, I have also left a console.log() which shows what month was randomly selected to be updated.
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

// array of months to select a random month
let monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/* POST new data to orders page*/
router.post('/', function(req, res, next) {
    var orderID = Date.now() % 10000; // a unique number is generated < 10000
    var month = monthArr[Math.floor(Math.random() * 12)]; // get random month
    var day = Math.floor((Math.random() * 28)+1); // random day 
    var quantity = req.body.Quantity; // get quantity
    var topping = req.body.Topping; // get topping
    var notes =  req.body.Notes; // get notes
    var params = "'" + orderID.toString() + "'" + "," + "'" + month.toString() + "'" + "," + "'" + day.toString() + "'" + "," + "'" + quantity.toString() + "'" + "," + "'" + topping.toString() + "'" + "," + "'" + notes.toString() +"'";
    console.log("This is the RANDOM month: " + params); // this will show which month is getting the new order (months are RANDOM)
    dbquery("INSERT INTO ORDERS (orderId, Month, Day, Quantity, Topping, Notes) VALUES (" + params + ")", placeholder);
});

function placeholder(bool, results){} // dummy function to accept callback from dbquery


module.exports = router;
