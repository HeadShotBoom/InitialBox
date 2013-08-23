/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){
    //add the person object to the global window object - because main.js needs it
    window.Person=Person;

    //defines all possible job choices and actions for all the Person instances

    Person.jobs = ['Teacher','Farmer','Student','Pilot'];
    Person.actions = ['Sleeping','Eating','Working'];

    function Person(name,row){
        console.log("person created: ", name);
        this.name=name;

        //sets initial action for each person
        this.action=Person.actions[Math.floor(Math.random()*Person.actions.length)];

        //sets job
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //defines row so JS knows what row in the HTML to update the text in
        this.row=row;

        //displays initial action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }

    //Persons update method. This function occurs 30 times a second
    //and determines if the action changers for each person

    Person.prototype.update=function(){
        if(Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action=Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;

        }



    }
})();