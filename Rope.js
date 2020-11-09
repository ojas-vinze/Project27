class Rope{ 
    constructor(vbodyA,vbodyB,voffsetX,voffsetY){ 
        this.offsetX=voffsetX;
        this.offsetY=voffsetY;
        var options={
            bodyA:vbodyA,
            bodyB:vbodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var posA=this.chain.bodyA.position;
        var posB=this.chain.bodyB.position;
        strokeWeight(2);
        line(posA.x,posA.y,posB.x+this.offsetX,posB.y+this.offsetY); 
        } 
    }
