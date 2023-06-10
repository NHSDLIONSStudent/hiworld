$(document).ready(function(){

$("#testbutton").click(function(){
   $("div").css("background-color","red");
   $("strong").css("background-color","green");
    $("div, #testbutton").css("color","orange");

});



$("strong").click(function(){
   $(this).css("color","white");
});

});
