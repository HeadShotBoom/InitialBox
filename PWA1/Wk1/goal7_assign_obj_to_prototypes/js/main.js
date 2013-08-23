/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
// Daniel CarrollAug 22, 2013


(function(){
    var numOfPeople=3;
    var people=[];
    var names = ["Scott","Lyndon","Orcun","Eric","Rebecca"];
    var interval;

    //Loop that instantiates 3 Person objects
    for (var i=0; i<numOfPeople;i++){
        //will generate a number up to the names.length which is 5
        var personIndex = Math.floor(Math.random()*names.length);
        var person = new Person(names[personIndex],i+1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);

    }

    //ensure only one interval is running - clear out the old before running the new
    clearInterval(interval);

    //sets interval to 30FPS
    //The interval() method will continue calling the function until the clearInterval() is called,
    //or the window is closed.
    //the ID value returned by setInterval() is used as the parameter for the clearInterval() method.

    interval=setInterval(runUpdate, 1000/30);

    function populateHTML(data,field){
        var id=document.getElementById(field);
        id.innerHTML = data;
    }
    function runUpdate(){
        people.forEach(function(element){
            //console.log(element);
            //element = the items in the people array
            //.update = the prototype method in the person.js file
            element.update();
        });
    }
})();
