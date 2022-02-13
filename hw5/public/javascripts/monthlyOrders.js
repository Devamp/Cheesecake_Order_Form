/*Additional JavaScript file 
  Author: Devam Patel
  Version: 1/27/22
*/


$(function() {
   $("p").click(eventHandler);
});

// function to replace the selected month with the current month being displayed when a new month is clicked
 eventHandler = function(){
   $("#dropButtonID").html(this.innerHTML); // set new selected month
   $("#cherryDisplay").empty(); // clear current list
   $("#plainDisplay").empty(); // clear current list
   $("#chocolateDisplay").empty(); // clear current list

   $.post('/orders', convert(this.innerHTML), // url request and the month selected - sent to server
      function(data, status) { // function to execute on success
         var dataParsed = JSON.parse(data);

         // format parsed data
         var cherry = dataParsed[2].Topping + " Cheesecakes: " + dataParsed[2].Quantity;
         var chocolate = dataParsed[1].Topping + " Cheesecakes: " + dataParsed[1].Quantity;
         var plain = dataParsed[0].Topping + " Cheesecakes: " + dataParsed[0].Quantity;

         // update list with new data from the database
         $("#cherryDisplay").html(cherry);
         $("#chocolateDisplay").html(chocolate);
         $("#plainDisplay").html(plain);

      });
 }

 // helper function to format selected month into a JSON format
function convert(month){
   var string = {Month : month};
   return (string);
}
 
 
 


 
 
 