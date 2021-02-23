const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var thor, hammer;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    thor = new Thor(200,200,100,250);
    hammer = new Hammer(230,180,80,80);
    chain = new Chain(hammer.body,{x:200,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
   
   

    thor.display();
    hammer.display();
    chain.display();    
}