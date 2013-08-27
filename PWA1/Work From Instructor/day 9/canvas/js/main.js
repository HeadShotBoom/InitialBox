console.log("start canvas");

(function(){
    
    var canvas = document.createElement("canvas");//Creates a canvas element programmatically
    document.body.appendChild(canvas);//adds the canvas to the DOM
    var ctx = canvas.getContext("2d");//gain access to the canvas API
    canvas.width = 400;
    canvas.height = 400;


    //create and draw the image
//    var qr = new Image();
//    qr.src = "http://datamatrix.kaywa.com/img.php?s=8&d=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F27%2FHillary_Clinton_official_Secretary_of_State_portrait_crop.jpg";
//    qr.addEventListener('load',function(){ //wait for image to load then display on canvas
//        ctx.drawImage(qr,35,25,275,275);//x,y,width,height
//
//    }, false);

    //draw two lines

    ctx.beginPath();  //starts drawing path or resets the current path
    ctx.strokeStyle = "#ff0000";    //set stroke color
    ctx.lineWidth=2;//set stroke size
    ctx.moveTo(200,0);  //defines the starting point of the line
    ctx.lineTo(200,400);//defines the end of a line
    ctx.stroke();//render (draws) the line on the canvas

    //green line
    ctx.beginPath();
    ctx.strokeStyle = "00ff00";
    ctx.lineWidth = 5;
    ctx.moveTo(0,200);
    ctx.lineTo(400,200);
    ctx.stroke();

    //draw a rectangle with fill and stroke
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";   //defines fill color
    ctx.rect(175,175,50,50);//defines the rectangle at x=175 y=175 width=50 height=50
    ctx.fill();//renders fill
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    //draw circle with stroke
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,0,255,255)";
    ctx.strokeStyle = "#000000"; //default as black
    ctx.lineWidth = 8;
    ctx.arc(300,100,40,0,2*Math.PI);//defines the arc at x=300 y=100 radius of 40 starting angle ending angle
    ctx.stroke();
    ctx.fill();








})();