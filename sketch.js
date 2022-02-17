/// <reference path="./libraries/p5.global-mode.d.ts" />

var r = 255/2, g = 255/2, b = 255/2;
var sliderHeight = 30;
var sliderWidth = 10;
var paintWidth = 30;
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
  noStroke();
  fill(r,g,b);
  rect(0,0,width,sliderHeight * 3);
  fill("#FF0000");
  rect(r / 255 * width - sliderWidth / 2,0,sliderWidth,sliderHeight);
  fill("#00FF00");
  rect(g/255*width - sliderWidth / 2,sliderHeight,sliderWidth,sliderHeight);
  fill("#0000FF");
  rect(b/255*width - sliderWidth / 2,sliderHeight*2,sliderWidth,sliderHeight);

  strokeWeight(4);
  stroke(0,255);
    
  for(var i = 0; i < 4; i++) {
    line(0,sliderHeight * i,width,sliderHeight * i);
  }
  
}

function mouseDragged() {
  if(mouseY > sliderHeight * 3 && selectMode == -1) {
    noStroke();
    fill(r,g,b,75);
    ellipse(mouseX,mouseY,paintWidth);
  } else if(selectMode == 0) {
    r = mouseX / width * 255;
  } else if(selectMode == 1) {
    g = mouseX / width * 255;
  } else if(selectMode == 2) {
    b = mouseX / width * 255;
  }
}

function mousePressed() {
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
  selectMode = -1;
}