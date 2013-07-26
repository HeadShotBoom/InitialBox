// Daniel Carroll, 25 July, Conditionals Assignment

//I will build a set of conditionals that will determine what kind of team you will need to build based on the needs of various projects
//These are variables containing a string describing the various jobs.
var perOne = "Graphic Artist";
var perTwo = "Web Programmer";
var perThree = "Photographer";
var perFour = "Videographer";
var perFive = "Project Manager";
var perSix = "Models/Actors";

//This generates a prompt informing the user that the console log will be used.
alert("Please select a type of job from the ones described in console log.");
//this is a list for the user to analyze
    console.log("1) A client wants a website with videos of his product and a Bio page");
    console.log("2) A client wants a website built so that he can operate an online car dealership.");
    console.log("   It will need intro videos, photo tours of the cars, advertisements for the dealership and a secure commerce section.");
    console.log("3) A client wants a website where he can host various graphics he can link to social media.");
    console.log("   He also needs these graphics made professionally");
//this is a prompt that fills a variable input by the user based on their choice from the previous section
var jobType =prompt("Please enter the number associated with your job. (Only enter 1, 2, or 3)");
//if the jobType value is = 1 the statements below will be analyzed
if (parseInt(jobType)==1){
    //prompts asking questions
    var pics =prompt("Does the client need you to produce the pictures for his Bio page? (Enter Y or N)");
    var vid =prompt("Does the client need you to shoot the informational video?");
    if (vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"){
    var talent =prompt("Do you need to provide the actors for the video?(Enter Y or N)");}
    else {talent="N";}
    // a series of conditions that compare the above variables values against conditions and report the results in the console log
    if (((pics.toUpperCase()=="Y"||pics.toUpperCase()=="YES")&&(vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"))&&(talent.toUpperCase()=="Y"||talent.toUpperCase()=="YES")){
    console.log("For this job, you will need the following people. "+perTwo+", "+perSix+", "+perFour+", "+perThree+".");
    }else if (((pics.toUpperCase()=="N"||pics.toUpperCase()=="NO")&&(vid.toUpperCase()=="N"||vid.toUpperCase()=="NO"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO")){
        console.log("For this job you will only need a "+perTwo+".");
    }else if (((pics.toUpperCase()=="N"||pics.toUpperCase()=="NO")&&(vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO")){
        console.log("For this job you will need a "+perTwo+" and a "+perFour+".");
    }else if (((pics.toUpperCase()=="Y"||pics.toUpperCase()=="YES")&&(vid.toUpperCase()=="N"||vid.toUpperCase()=="NO"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO")){
        console.log("For this job you will need a "+perTwo+" and a "+perThree+".");
    }else if (((pics.toUpperCase()=="Y"||pics.toUpperCase()=="YES")&&(vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO")){
    console.log("For this job you will need a "+perTwo+" and a "+perFour+", "+perThree+".");}
//if the jobType value is = 2 the statements below will be analyzed
} else if (parseInt(jobType)==2){
    var pics =prompt("Does the client need you to produce the pictures of his products? (Enter Y or N)");
    var vid =prompt("Does the client need you to shoot the informational video?");
    if (vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"){
        var talent =prompt("Do you need to provide the actors for the video?(Enter Y or N)");}
    else {talent="N";}
    // a series of conditions that compare the above variables values against conditions and report the results in the console log
    if (((pics.toUpperCase()=="Y"||pics.toUpperCase()=="YES")&&(vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"))&&(talent.toUpperCase()=="Y"||talent.toUpperCase()=="YES")){
        console.log("For this job, you will need the following people. "+perTwo+", "+perSix+", "+perFour+", "+perThree+", "+perFive+".");
    }else if (((pics.toUpperCase()=="N"||pics.toUpperCase()=="NO")&&(vid.toUpperCase()=="N"||vid.toUpperCase()=="NO"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO")){
        console.log("For this job you will only need a "+perTwo+" and a "+perFive+".");
    }else if (((pics.toUpperCase()=="N"||pics.toUpperCase()=="NO")&&(vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO")){
        console.log("For this job you will need a "+perTwo+" and a "+perFour+", "+perFive+".");
    }else if (((pics.toUpperCase()=="Y"||pics.toUpperCase()=="YES")&&(vid.toUpperCase()=="N"||vid.toUpperCase()=="NO"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO")){
        console.log("For this job you will need a "+perTwo+" and a "+perThree+", "+perFive+".");
    }else if (((pics.toUpperCase()=="Y"||pics.toUpperCase()=="YES")&&(vid.toUpperCase()=="Y"||vid.toUpperCase()=="YES"))&&(talent.toUpperCase()=="N"||talent.toUpperCase()=="NO")){
        console.log("For this job you will need a "+perTwo+" and a "+perFour+", "+perThree+", "+perFive+".");}
    var logo =prompt("Does the client need original graphics made for the site?(Enter Y or N");
    if (logo.toUpperCase()=="Y"||logo.toUpperCase()=="YES"){
        console.log("You will also need a "+perOne+".");
    }
    }
//if the jobType value is = 3 the statements below will be analyzed
  else if (parseInt(jobType)==3){
    var logo =prompt("Does the client need original graphics made for the site?(Enter Y or N");
    if (logo.toUpperCase()=="Y"||logo.toUpperCase()=="YES"){
        console.log("You will need a "+perOne+" and a "+perTwo+".");
    }else console.log("You will only need a "+perTwo+" for this job.")
}


