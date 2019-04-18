var button;
var autoButton;
var rateSlider;
var angle;
var autorun;
var rate;

function setup() {
    angle = PI / 4;
    rate = 0.01;
    autorun = false;
    createCanvas(window.innerWidth - 20, 3 * window.innerHeight / 4);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
    rateSlider = createSlider(0, 0.10, 0.01, 0.01);
    slider.position(width / 2 - width / 30, height / 2 + height / 10);
    rateSlider.position(width / 2 - height / 12, height / 2 + height / 3.6);
    button = createButton('More information...');
    button.size(width / 12, height / 20);
    autoButton = createButton('Auto On');
    button.position(width / 2 - height / 10, height / 2 + height / 7);
    button.mousePressed(info);
    autoButton.position(width / 2 - height / 20, height / 2 + height / 4.5);
    autoButton.mousePressed(setAuto);
}

function resize_canvas() {
    if (width != window.innerWidth) {
        width = window.innerWidth - 20;
    }

    if (height != window.innerHeight) {
        height = window.innerHeight - 20;
    }
}

function draw() {
    if (autorun) auto();
    if (angle != slider.value()) {
        if (!autorun) angle = slider.value();
        background(51);
        stroke(255);
        fill(255, 255, 255);
        textAlign(CENTER);
        textSize(24 * height / 900);
        text((angle / PI).toFixed(4) + " PI", width / 2, height / 2 + height / 12);
        translate(width / 2, height);
        branch(height / 7 - height / 216);
    }
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}

function info() {
    fill(255, 255, 255);
    textAlign(LEFT);
    textSize(24 * height / 900);
    text(`You can see that the slider is\nmanipulating a fractal tree.
Unfortunately this is a very\ncomputationally intensive algorithm.
Not very good for javascript or browsers.`, width - (width / 4 + width / 12), height / 2 + height / 27);
}

function setAuto() {
    if (autorun == false) {
        autorun = true;
        autoButton.html('Auto Off');
    }
    else if (autorun == true) {
        autorun = false;
        autoButton.html('Auto On');
    }
}

function auto() {
    if (rate != rateSlider.value()) rate = rateSlider.value();
    if (angle <= TWO_PI) angle += rate;
    else angle = 0;
}

