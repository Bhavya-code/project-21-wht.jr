var canvas;
var music;
var o1,o2,o3,o4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    o1=createSprite(100,590,200,20);
    o1.shapeColor ="blue";

    o2=createSprite(300,590,200,20);
    o2.shapeColor ="red";

    o3=createSprite(500,590,200,20);
    o3.shapeColor ="yellow";

    o4=createSprite(700,590,200,20);
    o4.shapeColor ="green";

    //create box sprite and give velocity
    box=createSprite(random(20,750),100,30,30);
    box.shapeColor = "white";
    box.velocityY=5;
    box.velocityX=10;

    
}

function draw() {
    background(rgb(169,169,169));



    //create edgeSprite
    edges=createEdgeSprites();

    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(o1.isTouching(box)){
        box.shapeColor = "blue";
        box.velocityY=0;
        box.velocityX=0;
        music.stop();
    }

    if(o2.isTouching(box) && box.bounceOff(o2)){
        box.shapeColor = "red";
    }

    if(o3.isTouching(box) && box.bounceOff(o3)){
        box.shapeColor = "yellow";
    }

    if(o4.isTouching(box) && box.bounceOff(o4)){
        box.shapeColor = "green";
    }

    //to show sprites
    drawSprites();
}
