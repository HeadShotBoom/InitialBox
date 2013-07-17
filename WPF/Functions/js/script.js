// Script

console.log("---------Function---------");

//function helloMsg(){
//      console.log("Hello World!");
//}
//helloMsg();

//function shoutOut(){
//    console.log("AAAHHHHHHHH");
//}

//function twoMessage(){
//    console.log("Message 1");
//    console.log("Message 2");
//}
//twoMessage()

//function combineItAll(){
//helloMsg()
//twoMessage()
//}

//combineItAll()

console.log("---------Scope-------------");
//function calArea(){
//    var width = 10;
//    var height = 15;
//    var area = width * height;
//    console.log(area);
//}
//calArea();

console.log("---Arguements and paremeters---");

//function calculateArea(W, H){
//    var area = W * H;
//    console.log(area);
//}
//calculateArea(20,30)

//function makeNumbers(A, B, C, D, E){
//    var num = A * B * C * D * E;
//    console.log(num)
//}
//makeNumbers(1, 2, 3, 4, 5)
//
//function myNameIs(A, B, C){
//    var name = A + B + C
//    console.log(name);
//}
//myNameIs("Daniel", " Mark", " Carroll")

console.log("----Return Function------");

//function calArea(w, h){
//    var area = w * h;
//    return area;
//}
//var total = calArea(20,30);
//console.log(total);
//
//calArea(20,30)
//var z = parseInt(prompt("Enter Left Length for value Z"));
//var y = parseInt(prompt ("Enter Right Length for value Y"));
//var x = parseInt(prompt ("Enter Top Length for value x"));
//var w = parseInt(prompt ("Enter Bottom Length for value W"));
//function totalLength(a, b, c, d){
//    var length = a + b + c + d;
//    return length;
//}
//
//var total = totalLength(z, y, x, w);
//console.log(total);


console.log("------Annonymous Function------");

var calcArea = function(w,h){
    var area = w * h;
    return area;
}

var a = calcArea(20,30)
console.log(a);

//function helloMsg (){
//    console.log("Hello World");
//}
//
//helloMsg();