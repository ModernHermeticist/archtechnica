var button;
var angle = PI / 16;

function setup() 
{
    createCanvas(window.innerWidth-20, window.innerHeight-20);
    slider = createSlider(0, TWO_PI, PI/16, 0.01);
    slider.position(width / 2 - 80, height / 2 + 10);
    button = createButton('More information...');
    button.position(width / 2 - 65, height/2 + 30);
    button.mousePressed(info);
}

function resize_canvas()
{
    if (width != window.innerWidth)
    {
        width  = window.innerWidth-20;
    }

    if (height != window.innerHeight)
    {
        height = window.innerHeight-20;
    }
}
  
function draw() 
{
    // background
    if (angle != slider.value())
    {
        angle = slider.value();
        background(51);
        stroke(255);
        textFunc();
        translate(width/2, height);
        branch(100);
    }
}

function textFunc()
{
    textSize(32);
    fill(255, 255, 255);
    textAlign(CENTER);
    text('Welcome to ArchTechnica', width/2, height/2 - 80);
    textSize(18);
    text('Play with the slider you can see below this text.', width/2, height/2);
}

function branch(len)
{
    line(0,0,0,-len);
    translate(0,-len);
    if (len > 4)
    {
        push();
        rotate(angle);
        branch(len*0.67);
        pop();
        push();
        rotate(-angle);
        branch(len*0.67);
        pop();
    }
}

function info()
{
    fill(255, 255, 255);
    textAlign(CENTER);
    textSize(18);
    text('You can see that the slider is\nmanipulating a fractal tree.', width-width/4, height/2);
}

