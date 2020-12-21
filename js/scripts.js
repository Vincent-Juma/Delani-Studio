$(Document).ready(function() {
$(document).ready(function() {
    $("p").click(function() {
      $("logo.png").show();
    });
  });
  $(document).ready(function() {
    $("p").click(function() {
      $("./img/logo.png").toggle();
      $("/img/logo.png").toggle();
    });
  });
 $(document).ready(function(){
    $("#p1").hover(function(){
      alert("You entered p1!");
    },
    function(){
      alert("Bye! You now leave p1!");
    }); 
  });
  oFormObject = document.forms['myform_id'];
  <body onload="initForm(document.forms[0], 'service_complaint', 'Please enter your complaint in brief');"></body>

function initForm(oForm, element_name, init_txt)
{
     frmElement = oForm.elements[element_name];
      frmElement.value = init_txt;
}
function clearFieldFirstTime(element)
{
   if(element.counter==undefined)
   {
      element.counter = 1;
   }
   else
   {
      element.counter++;
   }

   if (element.counter == 1)
   {
      element.value = '';
   }
}
$(document).ready(function(){
  $(".div").hover(function() {
  $( '.img-class' ).attr("src","work1");
  }, function() {
    display: show;
  });
$(document).ready(function(){
  $(".div").hover(function() {
  $( '.img-class' ).attr("src","work2");
  }, function() {
    display: show;
  });
$(document).ready(function(){
(".div").hover(function() {
$( '.img-class' ).attr("src","work3");
}, function() {
      display: show;
});
$(document).ready(function(){
$(".div").hover(function() {
$( '.img-class' ).attr("src","work4");
}, function() {
display: show;
});
$(document).ready(function(){
$(".div").hover(function() {
$( '.img-class' ).attr("src","work5");
}, function() {
display: show;
});
$(document).ready(function(){
$(".div").hover(function() {
$( '.img-class' ).attr("src","work6");
}, function() {
display: show;
});
$(document).ready(function(){
$(".div").hover(function() {
$( '.img-class' ).attr("src","work7");
}, function() {
display: show;
});
$(document).ready(function(){
$(".div").hover(function() {
$( '.img-class' ).attr("src","work8");
}, function() {
    display: show;
    function register() 
 {
     if(document.getElementById("name").value<="" || document.getElementById("name").value)
     {
         document.getElementById("nameerror").innerHTML = "Enter a valid name!";
     }
     else
     {
         DD = document.getElementById("name").value;
         document.getElementById("nameerror").innerHTML = "";
 
         if(document.getElementById("E-mail").value<1 || document.getElementById("E-mail").value>12)
         {
             document.getElementById("E-mailerror").innerHTML = "Enter a valid E-mail!";
         }
         else
         {
             document.getElementById("E-mailerror").innerHTML = "";
             document.getElementById("display").innerHTML = "";
 
 
             E-mail = document.getElementById("E-mail").value();
             comments= document.getElementById("comments").value;
});
})})})})})})})})});              