// $(document).ready(function () {
//     $("h1").css("color", "red");
// })
// this call back function is used when $(jquery) is located at head tag
// if we want to use $ wihout call back function then we need to place $ script at the end of body, in this case call back function is not be written

$("h1").addClass("newStyleH1 margin100"); //we called 2 new css classes to be added to H1, addClass method adding new 2 classes to H1, removeClass do verse action
// hasClass metod will check either method contails class
console.log($("h1").hasClass("margin100"));

//$("h1").removeClass("newStyleH1");

// button

$("button").addClass("btn1");

// /////////////////////////////////////////////////////////////////////////////

// $(document.querySelector("button").addEventListener("click", function () {
//   alert("This button was clicked");
// }));
// in this case only 1 button will be clicked

// var allButtons = $(".buttons").length;
// for (var b = 0; b < allButtons; b++) {
//   $(".buttons")[b].addEventListener("click", clickedButton);
//   function clickedButton() {
//     alert("This button was clicked");
//   }
// }
// Much easier way to add same fuction for click method above: we need to add event listener useng $

// $(".buttons").click(function () {
//   alert("This button was pressed by using Evet Listener via using $");
// })

// applying $ for attrubites in html
$("a").attr("href", "https://yahoo.com");

$("a").addClass("angerTagSearch");

$(".header").addClass("h1Hover");


// keypress event
$("input").keypress(function (event) {
  $(".alert").text(event.key)
});

// document.querySelector(".header").click(function(){
//   alert("clicked");
// });


// $(".header").click(function(){
//  this.innerHTML= "it is clicked now";
// });

// to log Date
// $(".header").click(function(){
//   var count = new Date();
//   console.log(count);
// });

//mouseover
// $("h1").on("mouseover", function () {
//   $("h1").css("color", "coral");
// });

//animation / hide/ show/ toggle/ fadeIn/ fadeOut/ fadeToggle/ slideUp/ slideDown/ slideToggle
$("button").click(function(){
$("h1").slideToggle();
});
