import { C } from './complex.js';

let canvas = document.getElementById('c');
let ctx = canvas.getContext('2d');
let freq = document.getElementById('freq');
let dec = document.getElementById('dec');
let cycles = document.getElementById('cycles');
let animate = document.getElementById('animate');
let z = document.getElementById('z');
const dx = 0;
const dy = canvas.height / 2;
const mx = canvas.width / 2;
let zoom = 150;

let Frequency = parseFloat(freq.value);
let decalage = parseFloat(dec.value);

function drawSinus(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let f = parseInt(freq.value);
    ctx.beginPath();
    for (let i = 0; i < canvas.width * (2 * Math.PI); ++i) {

        ctx.lineTo(dx + (i / (2 * Math.PI)) * zoom, dy + Math.sin(i * f / (2 * Math.PI)) * zoom);
    }
    ctx.stroke();
}

function drawPolar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    let cy = parseFloat(cycles.value);
    for (let i = 0; i < 360 * (Frequency) * cy; ++i) {
        let mod = Math.sin(i * Math.PI / 180 / Frequency);
        let cp = C.polar((mod + decalage) / 2, Math.PI / 180 * i);
        ctx.lineTo(mx + cp.re * zoom, dy + cp.im * zoom)
    }
    ctx.stroke();
}

drawPolar();

freq.addEventListener('change', () => {
    Frequency = parseFloat(freq.value);
    drawPolar();
});
cycles.addEventListener('change', () => {
    drawPolar();
});
dec.addEventListener('change', () => {
    decalage = parseFloat(dec.value)
    drawPolar();
});
z.addEventListener('change', () => {
    zoom = parseInt(z.value)
    drawPolar();
});

let add = 0.001;
let intervalId = 0;
let animating;

function startAnimation() {
    animating = true;
    intervalId = setInterval(() => {
        let val = parseFloat(Frequency);
        decalage = parseFloat(dec.value);
        zoom = parseInt(z.value)

        if (val > 0.9) {
            add = -0.001;
        } else if (val < 0.1) {
            add = 0.001;
        }
        Frequency = (val + add).toString();
        freq.value = Frequency;
        drawPolar();
    }, 30)
}

function stopAnimation() {
    animating = false;
    clearInterval(intervalId);
}

animate.addEventListener('click', () => {
    if (animating) {
        stopAnimation();
        animate.innerText = "start animation";
    } else {
        startAnimation();
        animate.innerText = "stop animation";
    }
});

startAnimation();