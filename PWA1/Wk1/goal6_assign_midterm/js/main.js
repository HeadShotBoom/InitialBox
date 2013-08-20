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

    console.log('Name: ',students[0].name);
    console.log('Address: ',students[0].address.address,students[0].address.city,students[0].address.state);
    console.log('GPA: ['+students[0].gpa[0]+', '+students[0].gpa[1]+', '+students[0].gpa[2]+']');

    console.log('Name: ',students[1].name);
    console.log('Address: ',students[1].address.address,students[1].address.city,students[1].address.state);
    console.log('GPA: ['+students[1].gpa[0]+', '+students[1].gpa[1]+', '+students[1].gpa[2]+']');

    console.log('Name: ',students[2].name);
    console.log('Address: ',students[2].address.address,students[2].address.city,students[2].address.state);
    console.log('GPA: ['+students[2].gpa[0]+', '+students[2].gpa[1]+', '+students[2].gpa[2]+']');


    students.push(student4= { name:'Late Guy', address:{address:'666 Hell St',city:'SouthMiddle Earth',state:'NA'}, gpa:[1.0,1.1,1.2],phone:'None on file'} );
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







