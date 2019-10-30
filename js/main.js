//Validating The Product Title characters
  function checkForm() {
    var err = 0;
  if (document.getElementById("product_title_input").value.length < 8) {
      
  document.getElementById("product_title_input").style.border = "1px solid #ECAA0B";
  document.getElementById("text_err").innerHTML = "Minumum of 8 and Maximum of 100 Characters";

  err = 1;
  }
    if ( err == 1 ) {
       document.getElementById('next_button').setAttribute("disabled","disabled");
       document.getElementById('next_button').style.background = "red";
    } else {
       document.getElementById('next_button').removeAttribute("disabled");
       document.getElementById('next_button').style.background = "#76B62E";
    }
  }
  function setBorder(id) {
  document.getElementById(id).style.border = "1px solid #ECAA0B";
  document.getElementById(id+"_err").innerHTML = "";
  }
  document.getElementById('next_button').addEventListener("mouseover", checkForm);


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
   
