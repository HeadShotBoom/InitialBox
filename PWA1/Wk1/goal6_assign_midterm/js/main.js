/*
	* Mid Terms for PWA-1
*/
(function (){


students = [
    student1= {
        name:'Dan Carroll',
        address:{
            address:'3300 University Blvd',
            city:'Winter Park',
            state:'FL'
        },
        gpa:[
        3.5,
        2.5,
        4.0],
        phone:'(407)555-1212'},
    student2= {
        name:'John Doe',
        address:{
            address:'123 No Street',
            city: 'Savannah',
            state:'Ga'
        },
        gpa:[
        1.0,
        3.5,
        3.2],
        phone:'(904)238-7978'},
    student3= {
        name:'Harry Potter',
        address:{
            address:'4 Privet Drive',
            city:'Little Whinging',
            state:'Surrey'
        },
        gpa:[
        4.0,
        4.0,
        4.2],
        phone:'(555)123-4567'
    }];
              //Math.round( number * 10 ) / 10;
    function calcGpa(){
        var student1GPA=Math.round(((students[0].gpa[0]+students[0].gpa[1]+students[0].gpa[2])*10)/3)/10;
        var student2GPA=Math.round(((students[1].gpa[0]+students[1].gpa[1]+students[1].gpa[2])*10)/3)/10;
        var student3GPA=Math.round(((students[2].gpa[0]+students[2].gpa[1]+students[2].gpa[2])*10)/3)/10;
    }
calcGpa();
function clickButton(){
    var playerEntryAccept = document.getElementsByTagName('a');
    playerEntryAccept[0].addEventListener('click', 'NAME OF FUNCTION', false);        //REPLACE FUNCTION NAME WITH ONE THAT ACTIVATES THE CYCLE
}
//clickButton();
})();



 console.log('Test');







