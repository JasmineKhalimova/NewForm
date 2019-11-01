//Validating The Product Title characters

  var $input = $('input[type="text"]');

var $button = $('input[type="button"]');

setInterval(function(){

    if($input.val().length < 8){

        $button.attr('disabled', true);

       $button.css('background-color', "red");

    }else{

        $button.attr('disabled', false);

          $button.css('background-color', "green");

          $button.css('color', "white");

    }

   

}, 100);

// Scroll Down Function
$(function () {
    $('#product_details').on('shown.bs.collapse', function (e) {
        document.getElementById("product_details").scrollIntoView();
    }); 
});

// Hiding product_note
function hideProductInfo() {
    document.getElementById("product_note").style.display = "none";
}
   
