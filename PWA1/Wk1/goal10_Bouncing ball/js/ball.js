function Ball (radius, color){

    if(radius === undefined){radius = 40;}//default ball size
    if(color === undefined){color="#ff0000";}//default color

    //set ball properties
    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.color = color;
    this.lineWidth = 1;
}

Ball.prototype.update = function(context){
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();

    //x,y,redius,startangle,end angle, anti-clockwise
   context.arc(this.x,this.y,this.radius,0,(Math.PI*2), true);
    context.closePath();
    context.fill();
};