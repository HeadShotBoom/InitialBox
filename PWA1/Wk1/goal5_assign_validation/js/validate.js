/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){

        var id = document.querySelectorAll('#myform li input');

        for(i=0;i<id.length;i++){
            if(id[i].type==='text'||id[i].type==='password'){
            validateField(id[i]);

        }}

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;
        }else if(inputName.name === 'f_email'){
            var pattern = /(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/;
        }else if(inputName.name === 'f_phone'){
            var pattern = /^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/;
        }else if(inputName.name === 'f_ssn'){
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
        }else if(inputName.name === 'f_password'){
            var pattern = /^[a-zA-Z]\w{3,14}$/;
        }

        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



