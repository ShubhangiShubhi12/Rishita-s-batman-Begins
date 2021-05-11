const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var drops = [];
var man, man_img;


var thunder, thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
   createCanvas(windowWidth,windowHeight);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

    if(frameCount% 150 === 0){
        for(var i = 0; i<maxDrops; i++){
            drops.push(new createDrops(random(0,windowWidth), random(0,windowHeight)));
        }
    }
}

function draw(){
    background(0);
    Engine.update(engine);

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(frameCount===10 && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }

    drawSprites();
    
}   

