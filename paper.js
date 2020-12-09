class Paper{
constructor(x,y,r){
    var options={
    
        restitution:0.2,   
       isStatic=false
       }
      this.r = r
       ball = Bodies.circle(x,y,r,options)
       World.add(world,ball);
}
display(){
    var pos = this.body.position
    push()
    noStroke()
    translate(pos.x,pos.y)
    ellipseMode(0,0,this.r,this.r)
    circle(0,0,this.r,this.r);
    Bodies.rect(x,y,r,options)
    pop()
}
}