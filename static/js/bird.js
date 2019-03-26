function Bird() {
    this.x = 100;
    this.y = height / 2;
    this.gravity = 0.4;
    this.velocity = 0;
    this.up = -15;
    this.score = 0;
    this.width = width / 6; //100
    this.height = height / 10; //60
    this.lost = false;

    this.display = function () {
        imageMode(CENTER);
        image(bird, this.x, this.y, this.width, this.height);
    };

    this.fly = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.95;
        this.y += this.velocity;

        if (this.y > height) {
            // GAME OVER
            this.lost = true;
            this.y = height;
        }
        if (this.y < 30) {
            // GAME OVER
            this.lost = true;
        }
    };

    this.jump = function () {
        this.velocity += this.up;
        jump.play();
    };

    this.died = function () {
        this.velocity = 0;
        textSize(64);
        text('GAME OVER', 100, height / 2);
        noLoop();
        gameover.play();
    }

}