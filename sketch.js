const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log6 = new Log(100,100,100,PI/2);

    bird = new Bird(100,100);

    var options = {
        'restituition': 0.8,
        'friction': 1,
        'density': 1,
        isStatic: true
    }
    var options2 = {
        'restituition': 0.8,
        'friction': 1,
        'density': 1,
        isStatic: false
    }
    
    ball = Bodies.circle(600,10,20,options);
    World.add(world,ball);

    ball2 = Bodies.circle(800,300,40,options2);
    World.add(world,ball2);

    chain3 = new Chain(ball,ball2,0.5);

    //chain1 = new Chain(bird.body,log6.body,0.01);
    //pigChain = new Chain(pig1.body,pig2.body,0.7)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    log6.display();

    bird.display();

    chain3.display();
    //chain1.display();
    //pigChain.display();

    ellipse(ball.position.x,ball.position.y,20,20);

    ellipse(ball2.position.x,ball2.position.y,40,40);

    platform.display();
}
