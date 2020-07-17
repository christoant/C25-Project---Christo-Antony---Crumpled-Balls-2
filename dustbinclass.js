class Dustbin{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y-100,this.width,this.height+150);
    }
}