var vincents = ["engineer", "pilot", "developer"]
vincents.forEach(function(vincent) {
    alert(vincent + ' is on his laptop')
});





$(document).ready(function() {
    $("p").click(function() {
      $("img").show();
      alert("This is a paragraph boss")
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