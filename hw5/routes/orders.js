
/* Server side file to maintain the orders
* Author: Devam Patel
* Version: 2/11/22
*
* NOTES:
* Once the order has been placed, the updated month (JAN) must be clicked twice in order for it to update. This is a small bug which
* I couldnt solve.
*/

var express = require('express');
const { dbquery } = require('./dbms');
var router = express.Router();

// helper class to store a month's topping and quantities
let MonthData = class {

    constructor(countPlain, countChocolate, countCherry) {
        this.plain = countPlain;
        this.chocolate = countChocolate;
        this.cherry = countCherry;
    }

    addPlain(value){
        this.plain = value;
    }

    get getPlain(){
        return this.plain;
    }

    addChocolate(value){
        this.chocolate = value;
    }

    get getChocolate(){
        return this.chocolate;
    }

    addCherry(value){
        this.cherry = value;
    }

    get getCherry(){
        return this.cherry;
    }
}

    // initialize all of the month's data classes
    let janData = new MonthData(0, 0, 0);
    let febData = new MonthData(0, 0, 0);
    let marData = new MonthData(0, 0, 0);
    let aprData = new MonthData(0, 0, 0);
    let mayData = new MonthData(0, 0, 0);
    let junData = new MonthData(0, 0, 0);
    let julData = new MonthData(0, 0, 0);
    let augData = new MonthData(0, 0, 0);
    let sepData = new MonthData(0, 0, 0);
    let octData = new MonthData(0, 0, 0);
    let novData = new MonthData(0, 0, 0);
    let decData = new MonthData(0, 0, 0);

    // load initial values from the database
    dbquery("SELECT MONTH AS Month, TOPPING AS Topping, SUM(QUANTITY) AS 'count(*)' FROM ORDERS GROUP BY MONTH, TOPPING", storeResults);

    function storeResults(bool, results){
        // loop through the results and add the given quantities into the respective month's object
        for(i = 0; i < results.length; i++){

            if(results[i].Month == "JAN"){
                if(results[i].Topping == 'Plain'){
                    janData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    janData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    janData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "FEB"){
                if(results[i].Topping == 'Plain'){
                    febData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    febData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    febData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "MAR"){
                if(results[i].Topping == 'Plain'){
                    marData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    marData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    marData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "APR"){
                if(results[i].Topping == 'Plain'){
                    aprData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    aprData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    aprData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "MAY"){
                if(results[i].Topping == 'Plain'){
                    mayData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    mayData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    mayData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "JUN"){
                if(results[i].Topping == 'Plain'){
                    junData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    junData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    junData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "JUL"){
                if(results[i].Topping == 'Plain'){
                    julData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    julData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    julData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "AUG"){
                if(results[i].Topping == 'Plain'){
                    augData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    augData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    augData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "SEP"){
                if(results[i].Topping == 'Plain'){
                    sepData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    sepData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    sepData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "OCT"){
                if(results[i].Topping == 'Plain'){
                    octData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    octData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    octData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "NOV"){
                if(results[i].Topping == 'Plain'){
                    novData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    novData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    novData.addCherry(results[i]['count(*)']);
                }
            }

            if(results[i].Month == "DEC"){
                if(results[i].Topping == 'Plain'){
                    decData.addPlain(results[i]['count(*)']);
                } else if (results[i].Topping == 'Chocolate'){
                    decData.addChocolate(results[i]['count(*)']);
                } else if (results[i].Topping == 'Cherry'){
                    decData.addCherry(results[i]['count(*)']);
                }
            }

        }
    }


/* GET data for orders page. */
router.get('/', function(req, res, next) {
    res.send("Orders page");
});

/* POST new data to orders page (Read notes on header for additional info) */
router.post('/', function(req, res, next) {
    // update the data classes everytime request is given by calling the query
    dbquery("SELECT MONTH AS Month, TOPPING AS Topping, SUM(QUANTITY) AS 'count(*)' FROM ORDERS GROUP BY MONTH, TOPPING", storeResults); 
    let toReturn = dispay(req.body.Month); // call helper function to get JSON object
     res.json(toReturn);
});

// function which returns the corrsponding JSON object to a given month
function dispay(monthSelected){    

    if(monthSelected == "Jan"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": janData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": janData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : janData.getCherry
            }
        ]);
     
    }

    if(monthSelected == "Feb"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": febData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": febData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : febData.getCherry
            }
        ]);
     
    }

    if(monthSelected == "Mar"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": marData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": marData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : marData.getCherry
            }
        ]);
     
    }

    if(monthSelected == "Apr"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": aprData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": aprData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : aprData.getCherry
            }
        ]);
    }

    if(monthSelected == "May"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": mayData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": mayData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : mayData.getCherry
            }
        ]);
    }

    if(monthSelected == "Jun"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": junData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": junData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : junData.getCherry
            }
        ]);
    }

    if(monthSelected == "Jul"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": julData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": julData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : julData.getCherry
            }
        ]);
    }

    if(monthSelected == "Aug"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": augData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": augData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : augData.getCherry
            }
        ]);
    }

    if(monthSelected == "Sep"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": sepData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": sepData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : sepData.getCherry
            }
        ]);
    }

    if(monthSelected == "Oct"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": octData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": octData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : octData.getCherry
            }
        ]);
    }

    if(monthSelected == "Nov"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": novData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": novData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : novData.getCherry
            }
        ]);
    }

    if(monthSelected == "Dec"){
        return JSON.stringify([
            {
                "Topping" : "Plain",
                "Quantity": decData.getPlain
            },
            {
                "Topping" : "Chocolate",
                "Quantity": decData.getChocolate
            },
            {
                "Topping" : "Cherry",
                "Quantity" : decData.getCherry
            }
        ]);
    }

}
  

module.exports = router;