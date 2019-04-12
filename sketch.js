function setup() 
{
    createCanvas(window.innerWidth-20, window.innerHeight-20);
}
  
function draw() 
{
    // background
    background(51);
    stroke(255);
    textFunc();
    translate(width/2, height);
    branch(100);
}

function textFunc()
{
    textSize(32);
    textAlign(CENTER);
    text('Welcome to ArchTechnica', width/2, height/2);
}

function branch(len)
{
    line(0,0,0,-len);
    translate(0,-len);
    rotate(PI/4);
    line(0,0,0,-len);
}