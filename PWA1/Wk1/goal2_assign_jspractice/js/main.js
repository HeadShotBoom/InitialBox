// self-executing function


    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var nums = [1,2,3,4,5,6,7,8,9,10];
    function avgNumbers(arr){
        var total = 0;
        for(i=0;i<arr.length;i++){
            total=total+arr[i];
        }
       var mean = total/(arr.length);
       console.log("Mean number is "+mean);
    }
avgNumbers(nums);



    //--------------------------------------------------------
    console.log("2. concat first and last name");
    function fullName(X,Y){
        console.log(X, Y);
    }
        //PUT FUNCTION HERE

fullName('James', 'Bond');

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

function wordCount(passThrough){
        var splitIt = passThrough.split(" ");
        var numOfWords = splitIt.length;
    console.log(numOfWords);

    }
    wordCount(ipsum);
    //--------------------------------------------------------
    console.log("4. sentence char count");
function charCount(passThrough){
    var newWords = passThrough.trim();
    var length = newWords.length;
    console.log(length);
}

        //PUT FUNCTION HERE

    charCount(ipsum);

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

function vowelsInWord(X){
    count = 0;
    var capitalLetters = X.toUpperCase();
    posa = capitalLetters.indexOf("A");
    while ( posa != -1 ) {
    count++;
    posa =capitalLetters.indexOf("A",posa+1);

}
    pose = capitalLetters.indexOf("E");
    while ( pose != -1 ) {
        count++;
        pose = capitalLetters.indexOf("E",pose+1);
}
    posi = capitalLetters.indexOf("I");
    while ( posi != -1 ) {
        count++;
        posi = capitalLetters.indexOf("I",posi+1);
    }
    poso = capitalLetters.indexOf("O");
    while ( poso != -1 ) {
        count++;
        poso = capitalLetters.indexOf("O",poso+1);
    }
    posu = capitalLetters.indexOf("U");
    while ( posu != -1 ) {
        count++;
        posu = capitalLetters.indexOf("U",posu+1);
    }console.log(count)}

vowelsInWord('JavaScript');

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");
    var findNum = function(array,X){
        var evenNumbers=[];
        var oddNumbers=[];
        if (X==false){
            for(i=0;i<array.length;i++){
                if (array[i]%2!=0){
                    oddNumbers.push(array[i]);
                }

            }return oddNumbers;

        }else{
        for(i=0;i<array.length;i++){
            if (array[i]%2==0){
                evenNumbers.push(array[i]);
            }

        }return evenNumbers;
    }}

        //PUT FUNCTION HERE

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

