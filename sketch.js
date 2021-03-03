var canvas;
var music,mu;
var p1,p2,p3,p4;
var box;
var bound1,bound2,bound3,bound4;

function preload(){
music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    

    //create 4 different surfaces
    p1=createSprite(700,590,200,60);
    p2=createSprite(500,590,200,60);
    p3=createSprite(300,590,200,60);
    p4=createSprite(100,590,200,60);
    
    bound1=createSprite(400,1,800,10)
    bound2=createSprite(800,300,10,600)
    bound3=createSprite(1,300,10,600)
    bound4=createSprite(400,600,800,10)

    //create box sprite and give velocity
    box=createSprite(400,60,50,50);
    box.velocityY=20;
    box.velocityX=-18;
}

function draw() {
    background(0);
    //create edgeSprite
    p1.shapeColor="#66CCCC";
    p2.shapeColor="#CC3366";
    p3.shapeColor="#9999FF";
    p4.shapeColor="#990099";
    box.shapeColor="white";
    bound1.shapeColor="#17202A";
    bound2.shapeColor="#17202A";
    bound3.shapeColor="#17202A";
    bound4.shapeColor="black";

    //add condition to check if box touching surface and make it box
    
    
    box.bounceOff(bound1);
    box.bounceOff(bound2);
    box.bounceOff(bound3);
    box.bounceOff(bound4);
    

    if(p1.isTouching(box) && box.isTouching(p1)){
        box.shapeColor="white";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(p2.isTouching(box) && box.bounceOff(p2)){
        box.shapeColor="#CC3366";
    }
    if(p3.isTouching(box) && box.isTouching(p3)){
        box.shapeColor="#9999FF";
    }
    if(p4.isTouching(box) && box.isTouching(p4)){
        box.shapeColor="#990099";
        music.play();
    }
    drawSprites();
}

