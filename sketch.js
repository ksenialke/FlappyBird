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
    if (flappy.lost) {
        flappy.died();
    }

    if (pipes.length < 2) {
        flappy.score = 0;
    }else{
        flappy.score = pipes.length - 2;
    }

    textSize(64);
    text(flappy.score, 100, 100);

    flappy.fly();
    flappy.display();
    if (frameCount % 55 === 0) {
        pipes.push(new Pipe());
    }

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hit(flappy)) {
            flappy.died();
        }
    }
    // calcScore();
}

// function calcScore() {
//     for (let i = 0; i < pipes.length; i++) {
//         pipes[i].passed(flappy);
//     }
// }

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