// Daniel Carroll, 25 July, Conditionals Assignment

//I will build a set of conditionals that will determine what kind of team you will need to build based on the needs of various projects

var perOne = "Graphic Artist";
var perTwo = "Web Programmer";
var perThree = "Photographer";
var perFour = "Videographer";
var perFive = "Project Manager";
var perSix = "Models/Actors";


alert("Please select a type of job from the ones described in console log.");
    console.log("1) A client wants a website with videos of his product and a Bio page");
    console.log("2) A client wants a website built so that he can operate an online car dealership.");
    console.log("   It will need intro videos, photo tours of the cars, advertisements for the dealership and a secure commerce section.");
    console.log("3) A client wants a website where he can host various graphics he can link to social media.");
    console.log("   He also needs these graphics made professionally");

var jobType =prompt("Please enter the number associated with your job. (Only enter 1, 2, or 3)");

if (parseInt(jobType)==1){
    var pics =prompt("Does the client need you to produce the pictures of his products? (Enter Y or N)");
    var vid =prompt("Does the client need you to shoot the informational video?");
    if (vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"){
    var talent =prompt("Do you need to provide the actors for the video?(Enter Y or N)");}
    else {talent="N";}
    if (((pics.toUpperCase()=="Y"||pics.toUpperCase()=="YES")&&(vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"))&&(talent.toUpperCase()=="Y"||talent.toUpperCase()=="YES"))){
    console.log("For this job, you will need the following people. "+perTwo+", "+perSix+", "+perFour+".");
    }else if (((pics.toUpperCase()=="N"||pics.toUpperCase()=="NO")&&(vid.toUpperCase()=="N"||vid.toUpperCase()=="NO"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO"))){
        console.log("For this job you will only need a "+perTwo+".");
    }else if (((pics.toUpperCase()=="N"||pics.toUpperCase()=="NO")&&(vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO"))){
        console.log("For this job you will need a "+perTwo+" and a "+perFour+".");}
    else if (((pics.toUpperCase()=="Y"||pics.toUpperCase()=="YES")&&(vid.toUpperCase()=="N"||vid.toUpperCase()=="NO"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO"))){
        console.log("For this job you will need a"+perTwo+" and a "+perFour+".");}

}else {talent="N"}
} else if (parseInt(jobType)==2){
    var pics =prompt("Does the client need you to produce the pictures of his products? (Enter Y or N)");
    var vid =prompt("Does the client need you to shoot the informational video?");
    if (vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"){
        var talent =prompt("Do you need to provide the actors for the video?(Enter Y or N)");
    } else {talent="N"}
    var logo =prompt("Does the client need original graphics made for the site?");
    }
}  else if (parseInt(jobType)==3){
    var pics =prompt("Does the client need you to produce the pictures of his products? (Enter Y or N)");

}


