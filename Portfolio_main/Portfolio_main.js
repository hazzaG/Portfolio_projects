document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'bottom',
        hoverEnabled: false
    });
});

function slideLeft(clicked_id) {

    if (clicked_id === 'btn-blue') {
        var panel = document.getElementById('blue_panel');
        panel.classList.add('slide');
        var btn = document.getElementById('btn-container');
        btn.classList.add('btn-shift', 'positionOut');
        btn.classList.remove('positionIn');
        var revertC = document.getElementById('cyan_panel');
        revertC.classList.remove('slide');
        var revertY = document.getElementById('yellow_panel');
        revertY.classList.remove('slide');
        var revertO = document.getElementById('orange_panel');
        revertO.classList.remove('slide');
        var revertR = document.getElementById('red_panel');
        revertR.classList.remove('slide');

    }
    if (clicked_id === 'btn-cyan') {
        var panel = document.getElementById('cyan_panel');
        panel.classList.add('slide');
        var btn = document.getElementById('btn-container');
        btn.classList.add('btn-shift', 'positionOut');
        btn.classList.remove('positionIn');
        var revertB = document.getElementById('blue_panel');
        revertB.classList.remove('slide');
        var revertY = document.getElementById('yellow_panel');
        revertY.classList.remove('slide');
        var revertO = document.getElementById('orange_panel');
        revertO.classList.remove('slide');
        var revertR = document.getElementById('red_panel');
        revertR.classList.remove('slide');

    }
    if (clicked_id === 'btn-yellow') {
        var panel = document.getElementById('yellow_panel');
        panel.classList.add('slide');
        var btn = document.getElementById('btn-container');
        btn.classList.add('btn-shift', 'positionOut');
        btn.classList.remove('positionIn');
        var revertB = document.getElementById('blue_panel');
        revertB.classList.remove('slide');
        var revertC = document.getElementById('cyan_panel');
        revertC.classList.remove('slide');
        var revertO = document.getElementById('orange_panel');
        revertO.classList.remove('slide');
        var revertR = document.getElementById('red_panel');
        revertR.classList.remove('slide');
    }
    if (clicked_id === 'btn-orange') {
        var panel = document.getElementById('orange_panel');
        panel.classList.add('slide');
        var btn = document.getElementById('btn-container');
        btn.classList.add('btn-shift', 'positionOut');
        btn.classList.remove('positionIn');
        var revertB = document.getElementById('blue_panel');
        revertB.classList.remove('slide');
        var revertC = document.getElementById('cyan_panel');
        revertC.classList.remove('slide');
        var revertY = document.getElementById('yellow_panel');
        revertY.classList.remove('slide');
        var revertR = document.getElementById('red_panel');
        revertR.classList.remove('slide');

    }
    if (clicked_id === 'btn-red') {
        var panel = document.getElementById('red_panel');
        panel.classList.add('slide');
        var btn = document.getElementById('btn-container');
        btn.classList.add('btn-shift', 'positionOut');
        btn.classList.remove('positionIn');
        var revertB = document.getElementById('blue_panel');
        revertB.classList.remove('slide');
        var revertC = document.getElementById('cyan_panel');
        revertC.classList.remove('slide');
        var revertY = document.getElementById('yellow_panel');
        revertY.classList.remove('slide');
        var revertO = document.getElementById('orange_panel');
        revertO.classList.remove('slide');
    }
    if (clicked_id === 'btn-collapse') {
        var revertB = document.getElementById('blue_panel');
        revertB.classList.remove('slide');
        var revertC = document.getElementById('cyan_panel');
        revertC.classList.remove('slide');
        var revertY = document.getElementById('yellow_panel');
        revertY.classList.remove('slide');
        var revertO = document.getElementById('orange_panel');
        revertO.classList.remove('slide');
        var revertR = document.getElementById('red_panel');
        revertR.classList.remove('slide');
        var btn = document.getElementById('btn-container');
        btn.classList.remove('btn-shift', 'positionOut');
        btn.classList.add('positionIn');
    }


}

//-----------------------------------------------------//


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

