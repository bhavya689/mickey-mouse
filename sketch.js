var mickey,mickey_running,mickey_collided;
var ground,invisibleGround,groundImg;


function preload(){
  backgroundImg = loadImage("bg.jpg")
  mickey_running = loadAnimation("mm.png","mm1.png");
  mickey_collided = loadAnimation("mmc.png");
  
  groundImage = loadImage("ground.PNG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 // createSprite(400, 200, 50, 50);


  mickey = createSprite(50,height-70,20,50);
  
  
  mickey.addAnimation("running", mickey_running);
  mickey.addAnimation("collided", mickey_collided);
  mickey.setCollider('circle',0,0,350)
  mickey.scale = 0.08;
  
  invisibleGround = createSprite(width/2,height-10,width,125);  
  invisibleGround.shapeColor = "#f4cbaa";
  
  ground = createSprite(width/2,height,width,2);
  ground.addImage("ground",groundImage);
  ground.x = width/2
  //ground.velocityX = -(6 + 3*score/100);
  
}

function draw() {
  background(backgroundImg);
  
  if((keyDown("SPACE")) && mickey.y  >= height-120) {
    //jumpSound.play( )
    mickey.velocityY = -10;
     
  }
  
  mickey.velocityY = mickey.velocityY + 0.8

  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  mickey.collide(invisibleGround);
  drawSprites();
}