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



function stripperName(){
    var firstName=prompt("What street did you grow up on?");
    var lastName=prompt("What kind of dog do you have?");
    var wholeName = (firstName+" "+lastName);
    var extra = "Your stripper name is "
    var done = extra+wholeName
    return (wholeName)
}
//stripperName()

function calcAge(){
    var yearBorn =prompt("What year were you born? Enter value as a 4 digit number. ex. 1985");
    var currentYear =prompt("What is the current year? Enter value as a 4 digit number. ex. 1985");
    var thisBirthDay =prompt("Have you already had your birthday this year? Please enter 0 for yes and 1 for no");
    var age = currentYear-yearBorn-thisBirthDay;
    return age;

}


function groceryBills(){
    var a=parseInt(prompt ("What did you spend on Grocerys in week 1?"));
    var b=parseInt(prompt ("What did you spend on Grocerys in week 2?"));
    var c=parseInt(prompt ("What did you spend on Grocerys in week 3?"));
    var weekBills =[a,b,c];
    var total = 0;
    for(i=0;i<weekBills.length;i++){
        total +=weekBills[i];
    }
    var withTax = total*.065+total;
    return (withTax)
}



/*if (withTax<=100){
    console.log(statement+" You didnt even spend a C-Note");
}else console.log(statement+" You spent over $100!!!");
var statement = ('Your total grocery bill after tax is $'+withTax+".");*/


function nightOut(){
    var badName = stripperName()
    alert("Your pimp name is "+badName)
    var money=parseInt(prompt(badName+" how much money do you have in the bank?"));
//    if (money.charAt(0)=="$"){
//        var money2 = money.substr(1, money.length-1)
//    }else {money2=money;}
  var money2=money;

    var wishes=prompt("Would you like to go out this weekend "+badName+"? (YES or NO)");
    if (wishes.toUpperCase()=="YES"){
        alert("Lets see if you can afford it!");
        var moneyLeft=(money2-groceryBills());
        if (moneyLeft<1){
            alert(badName+" you dont have enough money for Groceries!");
        }else if(moneyLeft>100){
            alert("You have enough money, now lets see if your old enough.");
            var age = calcAge()
            if (age>=21){
                console.log("You are old enough to buy beer. "+badName+" No driking and driving.");
            }else console.log("NO BEER FOR YOU!!!");
            if (age==15){
                console.log("You are old enough to get a learners permit.");
            }else if (age>=16 && age<=20){
                console.log("You are old enough to drive. But No Drinking!");
            }else if (age<=14){
                console.log("You have a few more years before you need to worry about driving a car. "+badName);
            }
        }else alert("Perhaps you should save your money");{
    }
} else alert("LOSER!");
}
nightOut();


//if (age>=18){
//    console.log("You are old enough to vote.");
//} else console.log("You arent old enough to vote.");
