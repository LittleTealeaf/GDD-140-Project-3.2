/// <reference path="./libraries/p5.global-mode.d.ts" />

var r = 255/2, g = 255/2, b = 255/2;
var sliderHeight = 30;
var sliderWidth = 10;
var paintWidth = 30;

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

}

function mouseDragged() {
  if(!onMouseInteract()) {
    fill(r,g,b);
    ellipse(mouseX,mouseY,paintWidth);
  }
}

function mouseClicked() {
  onMouseInteract();
}

function onMouseInteract() {
  if(mouseY < sliderHeight) {
    r = mouseX / width * 255;
  } else if(mouseY < sliderHeight * 2) {
    g = mouseX / width * 255;
  } else if(mouseY < sliderHeight * 3) {
    b = mouseX / width * 255;
  } else {
    return false;
  }
  return true;
}