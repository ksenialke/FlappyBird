function Pipe() {
    this.x = 40;
    this.y = height;

    this.display = function () {
        var randStop = random((0.25*width), (0.4*width));
        var randStart = random((0.6*width),(0.75*width));

        rect(width / 2, 0, this.x, randStop);
        rect(width / 2, randStart, this.x, this.y);
    }

}