
$(document).ready(function() {
var des_text1 = '<img src="img/design_icon.png" alt="Snow" style="width:20%;"><br><h6>DESIGN</h6>';
var des_text2 = '<h5>DESIGN</h5><p>Our design practice offers a full range of services including brand strategy,interaction and visual design user experience testing. Throughout your project ,our designers create and implement visual design and workflows solicit user feedback and workwith you to make sure what gets built is what is needed.</p>';
$(document).ready(function() 
{
  $("#design").click(function()
  {
      $(this).html($(this).html() == des_text2 ? des_text1 : des_text2);
  });
});
var des_text1 = '<img src="./img/dev_icon.png" alt="Snow" style="width:20%;"><br><h5>DEVELOPMENT</h5>';
var des_text2 = '<h5>DEVELOPMENT<h5><p>All engineers are fluent in the latest enterprise, mobile and web development technologies. They collaborate with your team to write, and improve code on a daily basis,using proven practices such as test-driven development and pair programmin.'</p>;
$(document).ready(function() 
{
  $("#development").click(function()
  {
      $(this).html($(this).html() == des_text2 ? des_text1 : des_text2);
  });
});
var des_text1 = '<img src="./img/product_icon.png" alt="Snow" style="width:20%;"><br><h6>DESIGN</h6>';
var des_text2 = '<h5>PRODUCT MANAGEMENT</h5><p>Our design practice offers a full range of services including brand strategy,interaction and visual design user experience testing. Throughout your project ,our designers create and implement visual design and workflows solicit user feedback and workwith you to make sure what gets built is what is needed.</p>';
$(document).ready(function() 
{
  $("#product").click(function()
  {
      $(this).html($(this).html() == des_text2 ? des_text1 : des_text2);
  });
});




});

