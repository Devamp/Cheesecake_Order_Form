/*Additional JavaScript file 
  Author: Devam Patel
  Version: 1/27/22
*/



// function to replace the selected month with the current month being displayed when a new month is clicked
 eventHandler = function(){
    $("#dropButtonID").html(this.innerHTML);
 }
 
 $(function() {
    $("p").click(eventHandler);
 });
 


 
 
 