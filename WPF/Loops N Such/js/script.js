// Script


//var charAt = ['Test', 'test2', 'test3'];
//console.log(charAt);
//
//if(charAt[0]==''){
//    console.log('True');
//}else{
//    console.log('False')
//}
//
//
//for(i=0;i<10;i++){
//    console.log(charAt[i]);
//}

//var kids = [12, 14, 8, 14, 9, 23, 21, 3, 17, 18, 100, 100, 100, 100, 100, 100, 100, 100, 100];
//var total =0;
//for(i=0;i<kids.length;i++){
////    console.log(kids[i])
//    total +=kids[i]
//}
//console.log(total)
//var intSet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
//
//function junction(placeholder){
//    var total =0;
//    for(i=0;i<placeholder;i++){
//    total +=placeholder[i]
//    }
//    return (total)
//}
//
//console.log(junction(intSet))

//var numbers = [1,1,1,1,1,2,3,4,1,5];
//var letters = [1,1,1,1,1,2,3,4,1,5,1,1,1,1,1,2,3,4,1,5]
//function addNumbers(numbs){
//    var total =0
//    for(i=0;i<numbs.length;i++){
//        total +=numbs[i]
//    }
//    return (total);
//}
//console.log(addNumbers(letters));



//function stripperName(){
//    var firstName=prompt("What street did you grow up on?");
//    var lastName=prompt("What kind of dog do you have?");
//    var wholeName = (firstName+" "+lastName);
//    var extra = "Your stripper name is "
//    var done = extra+wholeName
//    console.log(done)
//}
//stripperName()

function calcAge(){
    var yearBorn =prompt("What year were you born? Enter value as a 4 digit number. ex. 1985");
    var currentYear =prompt("What is the current year? Enter value as a 4 digit number. ex. 1985");
    var thisBirthDay =prompt("Have you already had your birthday this year? Please enter 0 for yes and 1 for no");
    var age = currentYear-yearBorn-thisBirthDay;
    console.log(age) ;
    if (age>=21){
    console.log("You are old enough to buy beer");
    }else console.log("NO BEER FOR YOU!!!");

}

                      calcAge();