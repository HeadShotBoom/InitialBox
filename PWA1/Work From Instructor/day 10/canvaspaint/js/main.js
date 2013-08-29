//canvas painter

(function() {
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = 640;
    canvas.height = 480;
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = '#cccccc';//set background color
    ctx.fillRect(0,0,640,480);

    var mouse = utils.getMouse(canvas);//the getmouse function which returns an object literal that has X and Y of the Mouse
    var draw = false;//boolean that holds the status of if the mouse is being clicked.

    var color = "rgb(255,0,0)";
    ctx.strokeStyle = color;

    canvas.addEventListener("mousedown", onDraw);
    canvas.addEventListener("mouseup", onStopDraw);
    canvas.addEventListener("mouseout", onStopDraw);

    function onDraw(e){
        draw=true;
        ctx.beginPath();
        ctx.moveTo(mouse.x,mouse.y);
    }
    function onStopDraw(e){
        draw=false;
    }
    (function update(){
        if(draw){
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
        requestAnimationFrame(update);
    })();
   

})();