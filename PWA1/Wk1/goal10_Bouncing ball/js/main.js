/**
 * User: Daniel Carroll
 * Date: 8/29/13
 * Time: 10:00 PM
 * To change this template use File | Settings | File Templates.
 */

console.log("start chart");
if (window == top) {
    window.addEventListener("keydown", keyListener, false);
    function keyListener(e) {
    var code= e.keyCode;
        if(code == 37){
            vx=-5;
        }
        if(code==39){
            vx=5;
        }
        if(code==38){
            vy=-5;
        }
        if(code==40){
            vy=5;
        }


    }
}

(function (){

    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    ball = new Ball(25, "#0000ff"),
    vx = 0;
    vy = 0;




    ball.x = canvas.width * .5;
    ball.y = canvas.height * .5;

    (function update(){
        ctx.clearRect(0,0,canvas.width,canvas.height);//clear canvas before drawing (every frame)
        var left = 0,
        right = canvas.width,
        top = 0,
        bottom = canvas.height;

        ball.x += vx;
        ball.y += vy;

        //check collision against edge of canvas
        if(ball.x + ball.radius > right){
            ball.x = right - ball.radius;
            vx *= -1;
        }else if(ball.x - ball.radius < left){
            ball.x = left + ball.radius;
            vx *= -1;
        }
        if(ball.y +ball.radius > bottom){
            ball.y = bottom - ball.radius;
            vy *= -1;
        }else if(ball.y - ball.radius < top){
            ball.y = top +ball.radius;
            vy *= -1;
        }
        vx=0;
        vy=0;
        ball.update(ctx);//redraw the ball
        requestAnimationFrame(update);//function that runs 60FPS


    })();
})();
