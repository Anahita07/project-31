class Plinko{
    constructor(x,y,radius){
        var options ={
           isStatic : true,
           restitution : 0.3,
           friction : 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;      
        push();
        translate(pos.x,pos.y)    
        fill(255);      
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)         
        pop();
       
    }

}
