/*
	* Mid Terms for PWA-1
*/
//self executing function
(function (){

// this is the array where I store all of the students info
students = [
    //array position 0
    student1= {
        //name value
        name:'Dan Carroll',
        //address object
        address:{
            address:'3300 University Blvd',
            city:'Winter Park',
            state:'FL'
        },
        //gpa array
        gpa:[
        3.5,
        2.5,
        4.0],
        //phone value
        phone:'(407)555-1212'},
    //array position 1 (All the rest of the info is same as above
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



    //Add 4th student to the array named students above and set to position 3
    students.push(student4= { name:'Late Guy', address:{address:'666 Hell St',city:'SouthMiddle Earth',state:'NA'}, gpa:[1.0,1.1,1.2],phone:'None on file'} );

    //function capable of calculating the GPA of the students
    function calcGpa(p){
        //variable that uses ROUND to eliminate the excess numbers after the decimal
        var studentGPA=Math.round(((students[p].gpa[0]+students[p].gpa[1]+students[p].gpa[2])*10)/3)/10;
        //returns a value from the function to the location it was called from
        return studentGPA;
    }
    //function for determining the date and placing it where needed
    function makeADate(){
        //variable as a function for establishing the date
        var currentTime = new Date();
        //Identifys the current month
        var month = currentTime.getMonth() + 1;
        //Identifys the current day
        var day = currentTime.getDate();
        //identifys the current year
        var year = currentTime.getFullYear();
        //concationates the date values into a string as described in the directions
        return month+'/'+day+'/'+year;
    }
    //calls the above function and stores the value as a variable that is easily referenced later.
    var date = makeADate();






//A counter for keeping track of the cycle of students
var count = 0;
//function that executes code when the button is clicked (Click mechanisim is defined later)
function clickButton(){
    //If statement that only will let the code run if there are more students to display
    if(count<students.length){
        //Targets the NAME field in HTML
        var nameHTML = document.querySelector('#name p');
        //Pushes info to the name field in HTML
        nameHTML.innerHTML = 'Name: '+students[count].name;
        //Targets the address field in HTML
        var addressHTML = document.querySelector('#address p');
        //Pushes info to the address field in HTML
        addressHTML.innerHTML = 'Address: '+students[count].address.address+' '+students[count].address.city+' '+students[count].address.state;
        //Targets the GPA field in HTML
        var gpaHTML = document.querySelector('#gpa p');
        //Pushes info to the GPA field in HTML
        gpaHTML.innerHTML = 'GPA: '+students[count].gpa[0]+', '+students[count].gpa[1]+', '+students[count].gpa[2];
        //Targets the Date field in HTML
        var dateHTML = document.querySelector('#date p');
        //Pushes info to the date field in HTML
        dateHTML.innerHTML = 'Date: '+date;
        //Targets the GPA AVG field in HTML
        var gpaAvgHTML = document.querySelector('#gpaavg p');
        //Pushes info to the GPA AVG field in HTML
        gpaAvgHTML.innerHTML = 'Average GPA '+calcGpa(count);
        //Targets the Phone field in HTML
        var phoneHTML = document.querySelector('#phone p');
        //Pushes info to the Phone field in HTML
        phoneHTML.innerHTML = 'Phone# '+students[count].phone;
        // Displays all the above info into the Console Log
        console.log('Name: ',students[count].name);
        console.log('Address: ',students[count].address.address,students[count].address.city,students[count].address.state);
        console.log('GPA: ['+students[count].gpa[0]+', '+students[count].gpa[1]+', '+students[count].gpa[2]+']');
        console.log('Date: '+date);
        //Incriments the count variable
        count++;
        //If statement that will compare the count to the length of students array
        if (count==students.length){
            //removes event listener
            playerEntryAccept[0].removeEventListener('click', clickButton, false);
            //Targets the next button
            var buttonHTML= document.querySelector('#info_btn a');
            //Changes the Next Button to done
            buttonHTML.innerHTML = 'DONE!!!';
        }


    }
}

    //Targets the Next Button
    var playerEntryAccept = document.getElementsByTagName('a');
    //Listenes for the Next button to be clicked and executes a function when the button is clicked.
    playerEntryAccept[0].addEventListener('click', clickButton, false);


//EndWrapper
})();





