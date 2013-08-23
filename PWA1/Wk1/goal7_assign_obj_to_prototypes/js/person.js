/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){

    window.person=Person;

    Person.jobs = ['Teacher','Farmer','Student','Pilot'];
    Person.actions = ['Sleeping','Eating','Working'];

    function Person(name,row){
        this.name = name;
        //action and job are selected randomly from the person.jobs array and the person actions array

        this.job=Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
        this.row=row;
    }

    Person.prototype.update=function(){
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
    };









})();
