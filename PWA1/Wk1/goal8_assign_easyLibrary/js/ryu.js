/*
	PWA1: Goal7:  Simple Library
// the code below is how you would call the library function from the main javascript file

	var test = document.querySelectorAll("#test a");  //stores the anchor tags to the variable 'test'
	
	// call the library, passing the variable 'test' into it
    NAMEofLIBRARY(test).each(function(){

    // any additional code to run would go here

    });
   
    
// But, if you break it up so that it is stored to a variable,
// it would look something like this..
	
	var someVariable = NAMEofLIBRARY(test);

// Then you can call on the functions of the library like so,

	someVariable.each(function(){
		//any additional code would go in here
	});

*/

// NAMEofLIBRARY is arbitrary, you can name it whatever you want

var NAMEofLIBRARY = function(elems){

    return new NAMEofLIBRARY.prototype.init(elems);

};


NAMEofLIBRARY.prototype = {

    init: function(elems){
        this.elements = elems; // pass the existing array
    },
    elements: [],
    each: function(callback){
        for(i=0, max = this.elements.length; i< max; i++){
            callback.call(this.elements[i]);
            console.log(this.elements[i]);

        }
    }

}; // end prototype

NAMEofLIBRARY.prototype.init.prototype = NAMEofLIBRARY.prototype;