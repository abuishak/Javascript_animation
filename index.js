$("#btn").click(function(){
   $("#div1").hide(2000);
   $("#div1").show(2000);

})
$("#btn1").click(function(){
   $("#div2").fadeToggle(2000);
   
})
$("#btn2").click(function(){
   $("#div3").slideUp(2000).slideDown(2000);
   
})
$("#btn3").click(function(){
   $("#div4").animate({opacity:"0.5", height:"400px",width:"800px",margin:"30px"},2000);
   
})