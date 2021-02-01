const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mixDrop = 100 ;
var drop=[],man,manImg ;
var thunderGroup,thunder1I,thunder2I,thunder3I,thunder4I
var thunder ;



function preload(){
    manImg = loadImage("walking_1.png");
    thunder1I = loadImage("1.png");
    thunder2I = loadImage("2.png");
    thunder3I = loadImage("3.png");
    thunder4I = loadImage("4.png");
}

function setup(){
    createCanvas(800, 740);

// drop = new Rain(200,20)
man=createSprite(290, 610, 80,10);
man.addImage(manImg);
man.scale=0.4

    engine = Engine.create();
    world = engine.world;

 
  thunderGroup = createGroup();

  thunderGroup.setLifetimeEach(-1);
   
  if (frameCount % 60 === 0){
    for(var i = 0 ; i<mixDrop; i++){
    drop.push(new Rain(random(0,800),random(0,740))) 
    }
   }
  console.log(drop)

    Engine.run(engine);
  
}




function draw(){
    background("black");
  //drop.display()

  

  if (frameCount % 70 === 0){
    var thunder= createSprite(290,165,10,30);
  //generate random thunders
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: thunder.addImage(thunder1I);
               break;
       case 2: thunder.addImage(thunder2I);
               break;
       case 3: thunder.addImage(thunder3I);
               break;
       case 4: thunder.addImage(thunder4I);
       default: break;
     }

     

    thunder.lifetime = 15;
    thunder.scale = 0.3;
   thunderGroup.add(thunder);
     }

    
     
    
  

  for(var i = 0 ; i<mixDrop; i++){
   
    drop[i].display()
    drop[i]. reSet()
  }
   
   drawSprites();
  }   
  
 

    
   

