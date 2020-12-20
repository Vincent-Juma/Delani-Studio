$(Document).ready(function() {
$(document).ready(function() {
    $("p").click(function() {
      $("img").show();
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
});
