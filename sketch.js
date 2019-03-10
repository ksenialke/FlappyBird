// bird
var bird;
var flappy;

// pipes
var pipes = [];

// sounds
var jump;
var loselife;
var gameover;

function preload() {
    bird = loadImage('images/bird.png');
    jump = loadSound('sounds/jump.mp3');
    loselife = loadSound('sounds/loselife.mp3');
    gameover = loadSound('sounds/gameover.mp3');
}

function setup() {
    createCanvas(600, 600);
    flappy = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(50);
    flappy.fly();
    flappy.display();

    if(frameCount % 60 === 0){
        pipes.push(new Pipe());
    }

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();
    }
}

// if mouse is pressed jump
function mousePressed() {
    flappy.jump();
}

// if spacebar is pressed jump
function keyPressed() {
    if (keyCode === 32) {
        flappy.jump();
    }
}