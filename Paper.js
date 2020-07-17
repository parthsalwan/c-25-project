class paper{
constructor(x,y,radius){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }

    this.body=Bodies.circle(x, y,radius, options)
    World.add(world, this.body);
    this.image=loadImage("sprites/paper.png")
}

display(){
    var pos=this.body.position
    rectMode(CENTER);
    fill(0, 250, 0);
    ellipse(pos.x, pos.y, this.radius);
    imageMode(CENTER);
    image(this.image,0,0, this.width, this.height);


}


}