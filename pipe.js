function Pipe() {
    this.x = width;
    this.y = height;
    this.wide = 30;
    this.randStop = floor(random((0.25*width), (0.4*width)));
    this.randStart = floor(random((0.6*width),(0.75*width)));
    this.speed = 5;

    this.show = function () {
        fill(100,200,100);
        rect(this.x, 0, this.wide, this.randStop);
        rect(this.x, this.randStart, this.wide, this.y);
    };

    this.update = function () {
        this.x -= this.speed;
    };

    this.hit = function (bird) {
        if ((bird.y < this.randStop + bird.height / 2) || (bird.y > this.randStart + bird.height / 2)) {
            if (bird.x > this.x && bird.x < this.x + this.wide) {
                return true;
            }
        }
        return false;
    };

    // this.passed = function(bird) {
    //     let passedPipes = 0;
    //     if(this.x < bird.x){
    //         bird.score = passedPipes;
    //         passedPipes+=1;
    //         console.log('passed pipes'+passedPipes)
    //     }
    // }
}
