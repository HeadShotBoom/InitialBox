console.log("start canvas");

(function(){

    var grades = [100,10,55];
    var range = -495;

    var canvas = document.createElement("canvas");//Creates a canvas element programmatically
    document.body.appendChild(canvas);//adds the canvas to the DOM
    var ctx = canvas.getContext("2d");//gain access to the canvas API
    canvas.width = 600;
    canvas.height = 600;


    var swordfish = function(){
        //draw line that makes bar lines on the left
        ctx.beginPath();
        ctx.strokeStyle = "00ff00";
        ctx.lineWidth = 5;
        ctx.moveTo(85,60);
        ctx.lineTo(85,550);
        ctx.stroke();
        //draw line that makes bar lines on the left
        ctx.beginPath();
        ctx.strokeStyle = "00ff00";
        ctx.lineWidth = 5;
        ctx.moveTo(55,60);
        ctx.lineTo(115,60);
        ctx.stroke();
        //draw line that makes bar lines on the left
        ctx.beginPath();
        ctx.strokeStyle = "00ff00";
        ctx.lineWidth = 5;
        ctx.moveTo(55,550);
        ctx.lineTo(115,550);
        ctx.stroke();
        //Text Assigning Value to Scale
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font= "9px Georgia";
        ctx.fillText("100%",75,50);
        //Text Assigning Value to Scale
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font= "9px Georgia";
        ctx.fillText("75%",50,185);
        //Text Assigning Value to Scale
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font= "9px Georgia";
        ctx.fillText("50%",50,310);
        //Text Assigning Value to Scale
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font= "9px Georgia";
        ctx.fillText("25%",50,430);
        //Box for text background
        ctx.beginPath();
        ctx.fillStyle = "Blue";   //defines fill color
        ctx.rect(50,570,68,20);//defines the rectangle at x=175 y=175 width=50 height=50
        ctx.fill();//renders fill
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        //Text value
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font= "9px Georgia";
        ctx.fillText("Student Name",56,584);


        ctx.beginPath();
        ctx.fillStyle = "#ff0000";   //defines fill color
        ctx.rect(150,550,50,range*(grades[0]/100));//defines the rectangle at x=175 y=175 width=50 height=50
        ctx.fill();//renders fill
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "Blue";   //defines fill color
        ctx.rect(150,570,50,20);//defines the rectangle at x=175 y=175 width=50 height=50
        ctx.fill();//renders fill
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font= "9px Georgia";
        ctx.fillText("Student 1",156,584);

        ctx.fillStyle = "white";
        ctx.font= "9px Georgia";
        ctx.fillText("Score"+grades[0]+"%",156,543);

        ctx.beginPath();
        ctx.fillStyle = "#ff0000";   //defines fill color
        ctx.rect(250,550,50,range*(grades[1]/100));//defines the rectangle at x=175 y=175 width=50 height=50
        ctx.fill();//renders fill
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "Blue";   //defines fill color
        ctx.rect(250,570,50,20);//defines the rectangle at x=175 y=175 width=50 height=50
        ctx.fill();//renders fill
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font= "9px Georgia";
        ctx.fillText("Student 2",256,584);

        ctx.fillStyle = "white";
        ctx.font= "9px Georgia";
        ctx.fillText("Score"+grades[1]+"%",256,543);

        ctx.beginPath();
        ctx.fillStyle = "#ff0000";   //defines fill color
        ctx.rect(350,550,50,range*(grades[2]/100));//defines the rectangle at x=175 y=175 width=50 height=50
        ctx.fill();//renders fill
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "Blue";   //defines fill color
        ctx.rect(350,570,50,20);//defines the rectangle at x=175 y=175 width=50 height=50
        ctx.fill();//renders fill
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font= "9px Georgia";
        ctx.fillText("Student 3",356,584);

        ctx.fillStyle = "white";
        ctx.font= "9px Georgia";
        ctx.fillText("Score"+grades[2]+"%",356,543);
    };

    //Draws background image
    var qr = new Image();
    qr.src = "http://image.toutlecine.com/photos/c/l/o/clock-wise-01-g.jpg";
    qr.addEventListener('load',function(){ //wait for image to load then display on canvas
        ctx.drawImage(qr,7.5,7.5,585,585);//x,y,width,height
        swordfish();


    }, false);



})();