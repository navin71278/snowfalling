var boy;
var snow,snowImg,backgroundImg;

function preload(){
  getBackgroundImg();
 
  
}

function setup() {
  createCanvas(800,400);
 
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
    
  drawSprites();
  
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=12){
      backgroundImg = "snow3.jpg";
      textSize(30);
      fill("black");
      text("Time :"+ hour%12 + "PM", 50,100);
     
  }
  else{ 
    backgroundImg = "snow2.jpg";
    textSize(30);
      fill("black");
      text("Time :"+ hour%12 + "AM", 50,100);
  }

  backgroundImg = loadImage(backgroundImg);
  console.log(backgroundImg);

if(hour>=12){
  textSize(30);
  fill("black");
  text("Time : "+ hour%12 + " PM", 50,100);
}else if(hour==0){
  textSize(30);
  fill("black");
  text("Time : " + hour%12 + "AM",100,100);
}else{ 
  textSize(30);
  fill("black");
  text("Time :  12 AM", 50,100);
}
}