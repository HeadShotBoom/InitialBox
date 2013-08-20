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




    students.push(student4= { name:'Late Guy', address:{address:'666 Hell St',city:'SouthMiddle Earth',state:'NA'}, gpa:[1.0,1.1,1.2],phone:'None on file'} );
    function calcGpa(p){
        var studentGPA=Math.round(((students[p].gpa[0]+students[p].gpa[1]+students[p].gpa[2])*10)/3)/10;
        return studentGPA;
    }

    function makeADate(){
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        return month+'/'+day+'/'+year;
    }
    var date = makeADate();







var count = 0;

function clickButton(){
    if(count<students.length){

        var nameHTML = document.querySelector('#name p');
        nameHTML.innerHTML = 'Name: '+students[count].name;
        var addressHTML = document.querySelector('#address p');
        addressHTML.innerHTML = 'Address: '+students[count].address.address+' '+students[count].address.city+' '+students[count].address.state;
        var gpaHTML = document.querySelector('#gpa p');
        gpaHTML.innerHTML = 'GPA: '+students[count].gpa[0]+' '+students[count].gpa[1]+' '+students[count].gpa[2];
        var dateHTML = document.querySelector('#date p');
        dateHTML.innerHTML = 'Date: '+date;
        var gpaAvgHTML = document.querySelector('#gpaavg p');
        gpaAvgHTML.innerHTML = 'Average GPA '+calcGpa(count);
        var phoneHTML = document.querySelector('#phone p');
        phoneHTML.innerHTML = 'Phone# '+students[count].phone;
        console.log('Name: ',students[count].name);
        console.log('Address: ',students[count].address.address,students[count].address.city,students[count].address.state);
        console.log('GPA: ['+students[count].gpa[0]+', '+students[count].gpa[1]+', '+students[count].gpa[2]+']');
        count++;
        if (count==students.length){
            playerEntryAccept[0].removeEventListener('click', clickButton, false);
        }


    }
}


    var playerEntryAccept = document.getElementsByTagName('a');
    playerEntryAccept[0].addEventListener('click', clickButton, false);



})();





