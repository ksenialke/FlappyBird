function Bird() {
    this.x = 100;
    this.y = height / 2;
    this.gravity = 0.4;
    this.velocity = 0;
    this.up = -15;

    this.display = function () {
        imageMode(CENTER);
        // scale(0.7);
        image(bird, this.x, this.y, width/6, height/10);
        // ellipse(this.x, this.y, 25, 25)
    };

    this.fly = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.95;
        this.y += this.velocity;

        if(this.y > height){
            this.y = height;
            velocity = 0;
            // noLoop();
            // gameover.play();
            // GAME OVER
        }
        if(this.y < 0){
            this.y = 0;
            velocity = 0;
            // GAME OVER
        }
    };

    this.jump = function(){
        this.velocity += this.up;
        // jump.play();
    }

}