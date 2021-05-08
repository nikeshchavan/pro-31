const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
 var world,engine;
var maxDrops=100;
var drops=[];
var umbrella;
var thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame=0;
var thunder;


function preload(){
    thunder1=loadImage("images/thunderbolt/1.png")
    thunder2=loadImage("images/thunderbolt/2.png")
    thunder3=loadImage("images/thunderbolt/3.png")
    thunder4=loadImage("images/thunderbolt/4.png")

}

function setup(){
   createCanvas(400,700);
engine=Engine.create()
world=engine.world;
umbrella=new Umbrella(200,500);

if(frameCount%100===0){
    for(var i=0 ;i<maxDrops;i++ ){
        drops.push(new Drop(random(0,400),random(0,400)) )
    }
}
 
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    for(var i=0 ;i<maxDrops;i++ ){
       drops[i].display();
       drops[i].update();
    }
    var rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10)
        thunder.scale=0.5;
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;
            default:break;
            
        }
        
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
    
    drawSprites();
}   

