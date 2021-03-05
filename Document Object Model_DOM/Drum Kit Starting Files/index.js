

var numberOFDrumButtons = document.querySelectorAll(".set").length;

for (var i = 0; i < numberOFDrumButtons; i++) {

  document.querySelectorAll(".set")[i].addEventListener("click", function () {
    alert("I got clicked")
  });
}

