class Chain{
    constructor(bodyA,bodyB,stiffness){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 10,
            stiffness: stiffness,
            //damping: 0.1
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var a = this.chain.bodyA.position;
        var b = this.chain.bodyB.position;
        line(a.x,a.y,b.x,b.y);
    }
}