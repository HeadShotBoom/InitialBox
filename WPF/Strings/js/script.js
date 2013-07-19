//###Started on the Math class
//Math.
//    .PI
//    .random
//    .ceil
//    .floor
//    .exp

//###Getting a random number, Math.random gets a value between 0 and 1
//var testDoc = Math.random();
//console.log(testDoc);

//###Gets a random number between 0 and 50
//var testDoc = Math.random()*50;
//console.log(testDoc);

//###Gets a random number between 50 and 100
//###Math.ceil to round to the highest number (in this case we want 50)
//###Then after we get our value of 0-50, we add 50 to get our ultimate
//###range, from 50-100.
//var testDoc = (Math.ceil(Math.random()*50))+50;
//console.log(testDoc);

//###String class
//String Methods
//String.
//      .slice(start, end);     ==> string
//      .substr(start, length to split);    ==> string
//      .charAt(# location); ==> string of 1 character
//      .indexOf('string to search for'); ==> int  (first instance of a string)
//      .lastIndexOf('string to search for');  ==> int (last instance of a string)
//      .replace('string to find, string to replace'); ==> string
//      .trim() removes white space from end of a string
//      .split('text to be split on'); ==> an array
//      .concat('string to be joined'); ==> string

//var myName = 'Bryan';
//var herName = 'Amy';
//var ourNames = myName.concat(' ' + herName);
//console.log(ourNames);
//var changeName = ourNames.replace('Amy', 'Miss Hoot');
//console.log(changeName);
//console.log(changeName.charAt(7));
//console.log(changeName.indexOf('H'));
//console.log(changeName.lastIndexOf('o'));
//console.log(changeName.lastIndexOf('Hoot'));
//var newSplit = changeName.substr(6, 14);
//console.log(newSplit);
//###slice and substr will have different results
//var sliceSub = 'Words that have length';
//console.log(sliceSub.slice(2,10));
//console.log(sliceSub.substr(2,10));

//var longString = 'Owls are a group of birds that belong to the order Strigiformes, constituting 200 extant bird of prey species. Most are solitary and nocturnal, with some exceptions (e.g., the Northern Hawk Owl). Owls hunt mostly small mammals, insects, and other birds, although a few species specialize in hunting fish. They are found in all regions of the Earth except Antarctica, most of Greenland, and some remote islands. Owls are characterized by their small beaks and wide faces, and are divided into two families: the typical owls, Strigidae; and the barn-owls, Tytonidae.';
//console.log(longString);
//console.log('');
//var firstPer = longString.indexOf('.');
//console.log(longString.slice(0, firstPer+1));
//console.log('');


//Slicing out the second sentence.
//var firstPeriod = longString.indexOf('. ');
//var secondString = longString.slice(firstPeriod+2, longString.length-1);
//console.log(secondString);
//firstPeriod = secondString.indexOf('. ');
//var thirdString = secondString.slice(0,firstPeriod+1);
//console.log('--The second sentence is-- "' + thirdString + '"');

//###Split up sentences Using an Array
//var sentenceSplit = longString.split('.');
//var stringLength;
//var indent = ' - - ';
//console.log(sentenceSplit.length);
//stringLength = sentenceSplit[0].length;
//console.log(indent.concat(sentenceSplit[0] + '.'));
//console.log('');
//console.log(indent.concat(sentenceSplit[1].slice(1, (sentenceSplit[1].length)-1) + '.'));
//console.log('');
//console.log(indent.concat(sentenceSplit[2].slice(1, (sentenceSplit[2].length)-1) + '.'));


//###Doing some additional maths.
//     /* through */
//     will comment out large sections of code
//var triSide1 = 3;
//var triSide2 = 4;
//var triHyp = 5;
//var theta;
// getting the angle of theta where the opposite side is 3
//console.log('Getting degrees using Sin (arc sin)');
//theta = Math.asin(triSide1/triHyp);
//console.log(theta);
//console.log(theta*(180/Math.PI) + ' degrees');
//console.log('Getting degrees using Cos (arc cos)');
//theta = Math.acos(triSide2/triHyp);
//console.log(theta);
//console.log(theta*(180/Math.PI) + ' degrees');
//console.log('Getting degrees using Tan (arc tan)');
//theta = Math.atan(triSide1/triSide2);
//console.log(theta);
//console.log(theta*(180/Math.PI)+ ' degrees (rounded)');
//console.log('');
//console.log(Math.round(theta*(180/Math.PI)) + ' degrees (rounded)');

var sideA = prompt('Enter the value of the first side of a right triangle.')
var sideB = prompt('Enter the value of the second side of a right triangle.')
console.log(Math.pow(sideA, 2));
console.log(Math.pow(sideB, 2));
var sideC = Math.sqrt((Math.pow(sideA, 2)+Math.pow(sideB, 2)));
//toFixed(#) limits to a number of decimal places
console.log('The third side of the right triangle is ' + sideC);
console.log('or simply ' + sideC.toFixed(2) + ' in condensed form.');