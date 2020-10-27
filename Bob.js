class bob{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.r=r
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)

    }
    display(){
        var bpos = this.body.position
        fill("magenta")
        ellipseMode(RADIUS)
        ellipse(bpos.x,bpos.y,this.r,this.r)
    }
}