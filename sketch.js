var Bg1
var player, PlayerL, PlayerR, Jugador

function preload() {
  
Bg1 = loadImage("habitación bg.jpg");
player = loadImage("imgs/left2.png");
PlayerL = loadAnimation("imgs/left1.png", "imgs/left2.png", "imgs/left3.png", "imgs/left4.png");
PlayerR = loadAnimation("imgs/right1.png", "imgs/right2.png", "imgs/right3.png", "imgs/right4.png");

}

function setup() {
  
createCanvas(windowWidth, windowHeight);
PlayerL.frameDelay = 30
PlayerR.frameDelay = 10
Jugador = createSprite(width/2, height/2);
Jugador.addImage(player);
Jugador.addAnimation("right", PlayerR);
Jugador.addAnimation("left", PlayerL);
Jugador.scale = 0.2


}

function draw() {
  
background(Bg1);
if(keyIsDown(RIGHT_ARROW)){
    Jugador.velocityX = 5   
    Jugador.changeAnimation("right");
}

if(keyIsDown(LEFT_ARROW)){
    Jugador.velocityX = -5
    Jugador.changeAnimation("left");
}

drawSprites();

}
