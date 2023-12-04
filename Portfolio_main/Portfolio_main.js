document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'bottom',
        hoverEnabled: false
    });
});


/*

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

*/




var offClickReference = (function offClickFunction() {
    $(document).click(function (event) {
        var $target = $(event.target);
        if (!$target.closest("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel, #red_panel, #btn-blue, #btn-cyan, #btn-yellow, #btn-orange, #btn-red, #main-btn").length) {
            $("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel, #red_panel").removeClass('slide');
            $("#btn-container").removeClass('btn-shift', 'positionOut');
            $("#btn-container").addClass('positionIn');
            $("#btn-lock").addClass('hidden');
        }
    });

}());

///*
function toggleLock() {
    $("#btn-lock-i").text((i, t) => t == 'lock' ? 'lock_open' : 'lock');

}

//*/

function slideLeft(clicked_id) {
    switch (clicked_id) {
        case "btn-blue":
            $("#cyan_panel, #yellow_panel, #orange_panel, #red_panel").removeClass('slide');
            $("#blue_panel").addClass('slide');
            $("#btn-container").removeClass('positionIn');
            $("#btn-container").addClass('btn-shift', 'positionOut');
            $("#btn-lock").removeClass('hidden');
            break;
        case "btn-cyan":
            $("#blue_panel, #yellow_panel, #orange_panel, #red_panel").removeClass('slide');
            $("#cyan_panel").addClass('slide');
            $("#btn-container").removeClass('positionIn');
            $("#btn-container").addClass('btn-shift', 'positionOut');
            $("#btn-lock").removeClass('hidden');
            break;
        case "btn-yellow":
            $("#blue_panel, #cyan_panel, #orange_panel, #red_panel").removeClass('slide');
            $("#yellow_panel").addClass('slide');
            $("#btn-container").removeClass('positionIn');
            $("#btn-container").addClass('btn-shift', 'positionOut');
            $("#btn-lock").removeClass('hidden');
            break;
        case "btn-orange":
            $("#blue_panel, #cyan_panel, #yellow_panel, #red_panel").removeClass('slide');
            $("#orange_panel").addClass('slide');
            $("#btn-container").removeClass('positionIn');
            $("#btn-container").addClass('btn-shift', 'positionOut');
            $("#btn-lock").removeClass('hidden');
            break;
        case "btn-red":
            $("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel").removeClass('slide');
            $("#red_panel").addClass('slide');
            $("#btn-container").removeClass('positionIn');
            $("#btn-container").addClass('btn-shift', 'positionOut');
            $("#btn-lock").removeClass('hidden');
            break;
        case "btn-collapse":
            $("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel, #red_panel").removeClass('slide');
            $("#btn-container").removeClass('btn-shift', 'positionOut');
            $("#btn-container").addClass('positionIn');
            $("#btn-lock").addClass('hidden');
            break;
    }



}



//-----------------------------------------------------//


let topBreath;
// this const might cause problems, I dont know//
const fullmain = document.getElementById("fullmain");

function breathCheck() {
    if (topBreath) {
        topBreath = setInterval(breath, 32000);
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


setInterval(breathFocus, 32000)
function breathFocus() {
    if (document.hasFocus()) {
        breath();
    }
    else {

    }
}