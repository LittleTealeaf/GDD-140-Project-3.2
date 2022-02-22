/// <reference path="./libraries/p5.global-mode.d.ts" />

//The current color rgb values
var r = 255/2, g = 255/2, b = 255/2;
//The slider height
var sliderHeight = 30;
//How wide the slider should be
var sliderWidth = 10;
//Paint mode
var paintWidth = 40;

// The currently selected value that the user is dragging with
var selectMode = -1;

function setup() {
  createCanvas(windowWidth - 20,windowHeight - 20);
  stroke(0,100);
}

function draw() {
  // background(220);
  drawSliders();
}

function drawSliders() {
  //Draw the backgorund slider
  noStroke();
  fill(r,g,b);
  rect(0,0,width,sliderHeight * 3);

  //Draw each individual slider based on their current value
  fill("#FF0000");
  rect(r / 255 * width - sliderWidth / 2,0,sliderWidth,sliderHeight);
  fill("#00FF00");
  rect(g/255*width - sliderWidth / 2,sliderHeight,sliderWidth,sliderHeight);
  fill("#0000FF");
  rect(b/255*width - sliderWidth / 2,sliderHeight*2,sliderWidth,sliderHeight);

  //Draw four lines to separate sliders
  strokeWeight(4);
  stroke(0,255);
  for(var i = 0; i < 4; i++) {
    line(0,sliderHeight * i,width,sliderHeight * i);
  }
  
}

function mouseDragged() {
  //Swithc between select modes
  if(mouseY > sliderHeight * 3 && selectMode == -1) {
    noStroke();
    stroke(r,g,b,255);
    strokeWeight(paintWidth);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if(selectMode == 0) {
    //change the r value
    r = mouseX / width * 255;
  } else if(selectMode == 1) {
    //change in g value
    g = mouseX / width * 255;
  } else if(selectMode == 2) {
    //change the b value
    b = mouseX / width * 255;
  }
}

function mousePressed() {
  //Set the select mode based on the mouse position
  if(mouseY < sliderHeight) {
    selectMode = 0;
  } else if(mouseY < sliderHeight * 2) {
    selectMode = 1;
  } else if(mouseY < sliderHeight * 3) {
    selectMode = 2;
  }
  mouseDragged();
}

function mouseReleased() {
  //Reset the select mode
  selectMode = -1;
}