
//--------------------------------------------------
// This section is the code for making a easy indicatior to show if the document is focused



//  const checkfocus = document.getElementById("checkfocus") 

//setInterval(checkDocumentFocus, 300); 
//function checkDocumentFocus() {
//if (document.hasFocus()) {
// checkfocus.textContent = "This document has focus";
// checkfocus.style.background = "blue";
// var fullmain = document.getElementById("fullmain")
//var fullmain = document.getElementById("fullmain"); fullmain.classList.add("scroll")// This is for if you want to have the animation play once upon focus

// }
// else {
// checkfocus.textContent = "This document does not have focus";
// checkfocus.style.background = "red";
//var fullmain = document.getElementById("fullmain"); fullmain.classList.remove("scroll") // This is for if you want to have the animation play once upon unfocus
// }
//  }



//-----------------------------------------------------------
// This is the code to cause the CSS class to switch between the two postions on the gradient background

let topBreath;
// this const might cause problems, I dont know//
const fullmain = document.getElementById("fullmain");

function breathCheck() {
    if (topBreath) {
        topBreath = setInterval(breath, 4600);
    }
}

// This is the Conditional (ternary) operator that performs the switch and functions similar to an if...else statement. NOTE it is important that all the class names that need to be switched and all the class names from the desired outcome of the switch are included.
function breath() {
    var breathSwitch = document.getElementById("fullmain");
    breathSwitch.className = breathSwitch.className === "fullmain scroll" ? "fullmain wack" : "fullmain scroll";
}

function stopBreath() {
    clearInterval(topBreath);

    topBreath = null;
}


setInterval(breathFocus, 4600)
function breathFocus() {
    if (document.hasFocus()) {
        breath();
    }
    else {

    }
}



//----------------------------------------------------------

//This is the script for the colour switching//

function colorSwitch() {
    fullmain.classList.add("fullmain2");
    fullmain.classList.remove("fullmain");
    fullmain.classList.remove("scroll");

}

// function toColor2() {
//  var ctc2 = document.getElementById("fullmain");
//ctc2.className = ctc2.className === "fullmain scroll" ? "fullmain2" : "fullmain scroll";
// }
