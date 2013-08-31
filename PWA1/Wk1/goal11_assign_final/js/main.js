/*
	* Mid Terms for PWA-1
*/



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
    return month.toString()+'/'+day.toString()+'/'+year.toString();
}
//calls the above function and stores the value as a variable that is easily referenced later.
var date = makeADate();

students = [];

//self executing function
(function (){

    students[0] = new Student({
        name: "Daniel Carroll",
        address: "7513 Georgia Peach Dr. Winter Park, FL 32792",
        gpa: [3.5,2.5,4.0],
        phone: '(407)619-2560',
        date: date
    });

    students[1] = new Student({
        name: "John Doe",
        address: "123 No Street Savannah, Ga 31419",
        gpa: [1.0,3.5,3.2],
        phone: '(904)238-7978'
    });

    students[2] = new Student({
        name: "Harry Potter",
        address: "4 Privet Drive Little Whinging Surrey",
        gpa: [4.0,4.0,4.2],
        phone: '(407)867-5306'
    });







    //function capable of calculating the GPA of the students
    function calcGpa(p){
        //variable that uses ROUND to eliminate the excess numbers after the decimal
        studentGPA=Math.round(((students[p].gpa[0]+students[p].gpa[1]+students[p].gpa[2])*10)/3)/10;
        //returns a value from the function to the location it was called from
        return studentGPA;
    }





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
        addressHTML.innerHTML = 'Address: '+students[count].address;
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
        console.log('Address: ',students[count].address);
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


////EndWrapper
})();





