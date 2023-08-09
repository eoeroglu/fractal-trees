var angle;
var slider_angle;
var slider_len;
var slider_branches;
var slider_shrinking_length;
var slider_shrinking_thickness;
var input_angle;
var input_branches;
var input_len;
var input_shrinking_length;
var input_shrinking_thickness;

function setup() {
    createCanvas(400, 400);
    
    slider_angle = createSlider(0, 2, 0.25, 0.01);
    input_angle = createInput(slider_angle.value()+ ' PI')
    slider_angle.input(sliderAngleChange);

    slider_branches = createSlider(2, 10, 2, 2);
    input_branches = createInput(slider_branches.value() + ' branches')
    slider_branches.input(sliderBranchesChange);

    let div1 = createDiv();
    
    slider_shrinking_length = createSlider(0.01, 0.99, 0.67, 0.01);
    input_shrinking_length = createInput(round(slider_shrinking_length.value(),2) + ' length const.')
    slider_shrinking_length.input(sliderShrinkingLengthChange);

    slider_shrinking_thickness = createSlider(0.01, 0.99, 0.67, 0.01);
    input_shrinking_thickness = createInput(round(slider_shrinking_thickness.value(),2) + ' thickness const.')
    slider_shrinking_thickness.input(sliderShrinkingThicknessChange);
    
    let div2 = createDiv();

    slider_len = createSlider(50, 200, 100, 0.01);
    input_len = createInput(slider_len.value() + ' px length')
    slider_len.input(sliderLenChange);
}

function draw() {
    background(150);
    angle = slider_angle.value() * PI;
    var len = slider_len.value();
    var stroke = 10
    translate(200,height);
    branch(len, stroke);
}

function branch(len, stroke) {
    strokeWeight(stroke);
    line(0,0,0,- len);
    translate(0, -len);
    if (len>slider_branches.value()*3) {
        for (let i=2; i<= slider_branches.value();i += 2) {
            push();
            rotate(angle * (i/2));
            branch(len * slider_shrinking_length.value(), stroke * slider_shrinking_thickness.value());
            pop();
            push();
            rotate(-angle * (i/2));
            branch(len * slider_shrinking_length.value(), stroke * slider_shrinking_thickness.value());
            pop();
        }
    }
}

function sliderAngleChange(){
    input_angle.value(slider_angle.value() + ' PI');
}

function sliderBranchesChange(){
    input_branches.value(slider_branches.value() + ' branches');
}

function sliderLenChange(){
    input_len.value(slider_len.value());
}

function sliderShrinkingLengthChange(){
    input_shrinking_length.value(slider_shrinking_length.value() + ' length const.');
}

function sliderShrinkingThicknessChange(){
    input_shrinking_thickness.value(slider_shrinking_thickness.value() + ' thickness const.');
}