var express = require('express');
var router = express.Router();

// create the JSON object array
let objArray = [
    {
        "Topping": "Plain",
        "Quantity": 2
    },

    {
        "Topping": "Chocolate",
        "Quantity": 4
    },

    {
        "Topping": "Cherry",
        "Quantity": 8
    }
]


/* GET data for orders page. */
router.get('/', function(req, res, next) {
    res.send(JSON.stringify(objArray)); 
});

/* POST new data to orders page*/
router.post('/', function(req, res, next) {
    res.send(JSON.stringify(objArray));
});
  
  module.exports = router;