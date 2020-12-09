class Ground{
constructor(){
   var options={
    isStatic=false
    
   }
   this.width=width
    this.height=height
    this.body = Bodies.rectangle(x,y,width,height,options)
   
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