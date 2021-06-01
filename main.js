var canvas = document.getElementById("myCanvas");
var track_image = "race_track.jpg";
var car1_image = "Car2-removebg-preview.png";
console.log(car1_image + "taken");
var car2_image = "Car3-removebg-preview.png";
console.log(car2_image);
var car1_width, car2_width = 25;
var car1_height,car2_height = 25;
console.log("width taken");
var car1x_position, car2x_position = "15";
var car1y_position = "5";
var car2y_position = "20";
var ctx = canvas.getContext("2d");

canvas.addEventListener("onload",add_image);

function add_image() {
backgroundImgTag = new Image();
backgroundImgTag = add_track();
backgroundImgTag.src = track_image;

car_1ImgTag = new Image();
car_1ImgTag.onload = add_car_image();
car_1ImgTag.src = car1_image;

car_2ImgTag = new Image();
car_2ImgTag.onload = add_car_image();
car_2ImgTag.src = car2_image;
}

function add_track() {
ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}
function add_car_image(){
ctx.drawImage(car_1ImgTag,car1x_position,car1y_position,car1_width,car1_height);
ctx.drawImage(car_2ImgTag,car2x_position,car2y_position,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
console.log()

function my_keydown(e){
var keydown = e.keyCode;
console.log(keydown + " pressed");
if (keydown == '38'){
console.log("up key pressed");
car1_up();
} 
if(keydown == '39'){
console.log("right arrow key pressed");
car1_right();
}
if (keydown == '37'){
console.log("left key pressed");
car1_left();
}
if (keydown == '40'){
console.log("down arrow key pressed");
car1_down();
}

if (keydown == '87'){
    console.log("W key pressed");
    car2_up();
    } 
    if(keydown == '65'){
    console.log("A key pressed");
    car1_right();
    }
    if (keydown == "83"){
    console.log("S key pressed");
    car1_left();
    }
    if (keydown == '68'){
    console.log("D key pressed");
    car1_down();
    }
}