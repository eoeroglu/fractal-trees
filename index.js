var angle = PI / 4;
var slider_angle;
var slider_len;
var slider_branches;

function setup() {
    createCanvas(400, 400);
    slider_angle = createSlider(0, TWO_PI, PI/4, 0.0001);
    let div1 = createDiv();
    slider_len = createSlider(50, 200, 100, 0.01);
    let div2 = createDiv();
    slider_branches = createSlider(2, 10, 2, 2);
}

function myInputEvent() {
    console.log(this.value());
};

function draw() {
    background(150);
    angle = slider_angle.value();
    //angle = 0;
    var len = slider_len.value();
    translate(200,height);
    branch(len);
}

function branch(len) {
    line(0,0,0,- len);
    translate(0, -len);
    if (len>slider_branches.value()*3) {
        for (let i=2; i<= slider_branches.value();i += 2) {
            push();
            rotate(angle * (i/2));
            branch(len * 0.67);
            pop();
            push();
            rotate(-angle * (i/2));
            branch(len * 0.67);
            pop();
        }
    }
}