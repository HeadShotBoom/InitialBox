/**
 * Created with JetBrains WebStorm.
 * User: DCarroll
 * Date: 8/31/13
 * Time: 5:24 PM
 * To change this template use File | Settings | File Templates.
 */

var Student = function(options){
    this.name = options.name;
    this.address = options.address;
    this.gpa = options.gpa;
    this.phone = options.phone;
    this.date = options.date;
};

Student.prototype.avgGPA = function (){
    //variable that uses ROUND to eliminate the excess numbers after the decimal
    studentGPA=Math.round(((this.gpa[0]+this.gpa[1]+this.gpa[2])*10)/3)/10;
    //returns a value from the function to the location it was called from


};