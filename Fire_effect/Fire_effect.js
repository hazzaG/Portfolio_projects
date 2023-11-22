let topFire;
// this const might cause problems, I dont know//
const box = document.getElementById("box");

function fireCheck() {
    if (topFire) {
        topFire = setInterval(fire, 4600);
    }
}

// This is the Conditional (ternary) operator that performs the switch and functions similar to an if...else statement. NOTE it is important that all the class names that need to be switched and all the class names from the desired outcome of the switch are included.
function fire() {
    var fireSwitch = document.getElementById("box");
    fireSwitch.className = fireSwitch.className === "box warp" ? "box wack" : "box warp";
}

function stopFire() {
    clearInterval(topFire);

    topFire = null;
}


setInterval(fireFocus, 4600)
function fireFocus() {
    if (document.hasFocus()) {
        fire();
    }
    else {

    }
}