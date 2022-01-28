
/*Additional JavaScript file 
  Author: Devam Patel
  Version: 1/27/22
*/

function orderClicked(){

    document.getElementById("dropDownID").style.display = "inline-block";


    // store all of the customers order details, including notes, quantity, and topping chosen
    var txt = document.getElementById('textArea').value;
    var quantity = document.getElementById("quantityDropdown").value;
    var toppingList = document.getElementsByName("toppings");
    var toppingSelected = null;
    
    // find which radio button was selected
    for(i = 0; i < toppingList.length; i++){
        if(toppingList[i].checked){
            toppingSelected = toppingList[i].value;
        }
    }

    // alert the customer if they are vegan
    if(txt.includes("vegan")){
        window.alert("The cheesecakes contain dairy!");
    } else {
        // reveal all of the post order processing summary lables and display them on the form
        document.getElementById("postLabels").hidden = false;
        document.getElementById("dropDownID").style.display = "inline-block";
        document.getElementById("preOrder").innerHTML = "";
        document.getElementById("totalOrders").innerHTML = "Orders for ";
        document.getElementById("thankyouNote").innerHTML = "Thank you! Your order has been placed."; 
        document.getElementById("orderSummary").innerHTML = "Order Summary:";
        document.getElementById("list").innerHTML = toppingSelected + " Cheesecakes" + "  ............................... x" + quantity;
        document.getElementById("postNotesTitle").innerHTML = "Notes Given: ";
        
        // if no notes are give, a deafult message is printed
        var placeholder = "No notes given.";
        if(txt){
            placeholder = txt;
        }
        document.getElementById("postNotesContent").innerHTML = placeholder;
    }
}







