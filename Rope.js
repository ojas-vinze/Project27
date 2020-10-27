class Rope{
    constructor(vbodyA,vbodyB){
        var options ={
            bodyA:vbodyA,
            bodyB:vbodyB,
            stiffness:0.4,
            length:10
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var posA = this.chain.bodyA.position
        var posB = this.chain.bodyB.position
        line(posA.x,posA.y,posB.x,posB.y)
    }
}