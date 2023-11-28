
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
        btn.classList.add('btn-shift');
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
        btn.classList.add('btn-shift');
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
        btn.classList.add('btn-shift');
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
        btn.classList.add('btn-shift');
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
        btn.classList.add('btn-shift');
        var revertB = document.getElementById('blue_panel');
        revertB.classList.remove('slide');
        var revertC = document.getElementById('cyan_panel');
        revertC.classList.remove('slide');
        var revertY = document.getElementById('yellow_panel');
        revertY.classList.remove('slide');
        var revertO = document.getElementById('orange_panel');
        revertO.classList.remove('slide');
    }

}

