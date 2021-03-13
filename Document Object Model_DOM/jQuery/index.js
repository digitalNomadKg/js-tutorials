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

// $("button:active").console.log(alert("This button was pressed"));
