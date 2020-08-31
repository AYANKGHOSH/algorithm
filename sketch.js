
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 100, 40);
  movingrect =createSprite(300,200,40,100);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
 


}



function draw() {
  background(255,255,255);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if (movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
     fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
     movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
     fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2 ){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
    
  }
 else  {
  
  
  
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  

}
 

  drawSprites();


}