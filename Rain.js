class Rain {
    constructor(x,y){
        var potion = {
            isStatic:false,
            'restitution':0.5,
          'friction':1,
          'density':1.9
        }
        this.body = Bodies.circle(x,y,5,potion);
        World.add(world,this.body)
       
    }
    display(){
        var pos = this.body.position
        fill("blue");
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y, 5, 5);
    }

    reSet()
 {
    
    if(this.body.position.y>height)
    {Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,740)})
    }
}
}
 
 
   
 
    
