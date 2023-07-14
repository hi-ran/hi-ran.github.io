
// dot background //
function getDocumentWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

function getDocumentHeight() {
    return Math.max(document.querySelector('#Stacks').clientHeight, window.innerHeight || 0)
};

var canvas = document.getElementById('dotCanvas');
var context = canvas.getContext('2d');

var vw = getDocumentWidth(),
    vh = getDocumentHeight();

window.addEventListener('resize', onResize, false);
function onResize() {
    vw = getDocumentWidth();
    vh = getDocumentHeight();
    resizeCanvas();
}

function resizeCanvas() {
    canvas.width = vw;
    canvas.height = vh;
    drawDots();
}
resizeCanvas();

// grid
function drawGrid() {
    var cellW = 10,
        cellH = 10;

    // vertical lines
    for (var x = 0; x <= vw; x += cellW) {
        context.moveTo(x, 0); // x, y
        context.lineTo(x, vh);
    }

    // horizontal lines
    for (var y = 0; y <= vh; y += cellH) {
        context.moveTo(0, y); // x, y
        context.lineTo(vw, y);
    }

    context.strokeStyle = "#cccccc";
    context.stroke();
}
// drawGrid();

// dots
function drawDots() {
    var r = 2.2,
        cw = 40,
        ch = 40;

    for (var x = 20; x < vw; x += cw) {
        for (var y = 20; y < vh; y += ch) {
            context.fillStyle = 'rgba(255,255,255, 0.09)';
            context.fillRect(x - r / 2, y - r / 2, r, r);
        }
    }
}
drawDots();