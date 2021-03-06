// assigning Audio for the images

var numberOfDrumButtons = document.querySelectorAll(".set").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".w")[i].addEventListener("click", itemClick);

    function itemClick() {
        var soundAudio = new Audio("sounds/tom-1.mp3");
        soundAudio.play();
    }
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".a")[i].addEventListener("click", itemClick);

    function itemClick() {
        var soundAudio = new Audio("sounds/tom-2.mp3");
        soundAudio.play();
    }
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".s")[i].addEventListener("click", itemClick);

    function itemClick() {
        var soundAudio = new Audio("sounds/tom-3.mp3");
        soundAudio.play();
    }
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".d")[i].addEventListener("click", itemClick);

    function itemClick() {
        var soundAudio = new Audio("sounds/tom-4.mp3");
        soundAudio.play();
    }
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".j")[i].addEventListener("click", itemClick);

    function itemClick() {
        var soundAudio = new Audio("sounds/crash.mp3");
        soundAudio.play();
    }
}


for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".k")[i].addEventListener("click", itemClick);

    function itemClick() {
        var soundAudio = new Audio("sounds/kick-bass.mp3");
        soundAudio.play();
    }
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".l")[i].addEventListener("click", itemClick);

    function itemClick() {
        var soundAudio = new Audio("sounds/snare.mp3");
        soundAudio.play();
    }
}