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
   $("#myList").empty(); // clear current list
   $.post('/orders', // url request
      function(data, status) { // function to execute on success
         $("#myList").append(data); // append the JSON data that is recieved
      });
 }
 
 
 


 
 
 