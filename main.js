img= "";
status= "";
function preload(){
    img= loadImage("dog_cat.jpg");
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
  objectDetector= ml5.objectDetector("CocoSsd",modelLoaded); 
  document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model is Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(results,error){
if(error){
    console.log(error);
}
console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FFFF00");
    noFill();
    text("Dog",45,75);
stroke("#0000FF");
rect(13,60,450,350);

fill(255,0,0);
noFill();
text("Cat",300,80);
stroke("#0000FF");
rect(270,60,350,330);
}