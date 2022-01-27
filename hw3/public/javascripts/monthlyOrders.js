 // function to replace the selected month with the current month being displayed when a new month is clicked
 eventHandler = function(){
    $("#dropButtonID").html(this.innerHTML);
 }
 
 $(function() {
    $("p").click(eventHandler);
 });
 


 
 
 