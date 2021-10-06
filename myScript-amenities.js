// CHOOSE YOUR AMENITIES, LOT

// email validation - this is regex code, i did not write this section:
function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
     {
       return (true)
     }
       alert('You have entered an invalid email address!')
       return (false)
   }
   
   
   // functions for printing the sunroom prices
   
   function printTenByTen() {
       var x = document.getElementById('tenbyten').value;
       document.getElementById('total').innerHTML = x;
   }
   
   function printTwentyByTwenty() {
       var x = document.getElementById('twentybytwenty').value;
       document.getElementById('total').innerHTML = x;
   }
   
   function printNoSunroom() {
       var x = document.getElementById('nosunroom').value;
       document.getElementById('total').innerHTML = x;
   }
   
   
   
   // adding the communities to the array
   
   function addItToArray() {
       anArray = [];
   
       if (document.getElementById('bridges').checked === true) {
           anArray.push('bridges');
       } else {
           anArray.splice(0,1);
       }
   
       if (document.getElementById('waverly').checked === true) {
           anArray.push('waverly');
       } else {
           anArray.splice(1,1);
       }
   
       if (document.getElementById('breckenridge').checked === true) {
           anArray.push('breckenridge');
       } else {
           anArray.splice(2,1);
       }
   
       if (document.getElementById('driscoll').checked === true) {
           anArray.push('driscoll');
       } else {
           anArray.splice(3,1);
       }
   
       if (document.getElementById('weldona').checked === true) {
           anArray.push('weldona');
       } else {
           anArray.splice(4,1);
       }
   
       console.log(anArray);
   
   }
   
   // END AMENITIES, LOT SECTION

// AMENITIES SELECTION AND LOT SECTION

// CHAPTER 9 LOGIN PAGE

'use strict'; //strict mode
// cookie for chapter 9, from the book

function processCookie() {
    document.cookie = 'username=' + document.getElementById('usernameInput').value;
}

function populateInfo() {
    if (document.cookie) {
        var uname = document.cookie;
        uname = uname.substring(uname.lastIndexOf('=') + 1);
        document.getElementById('usernameInput').value = uname;
    }
}

function handleSubmit(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
processCookie();
document.getElementsByTagName('form')[0].submit();
} 

function createEventListener() {
    var loginForm = document.getElementsByTagName('form')[0];
    if (loginForm.addEventListener) {
        loginForm.addEventListener('submit', handleSubmit, false);
    } else if (loginForm.attachEvent) {
        loginForm.attachEvent('onsubmit', handleSubmit);
    }
}

function setUpPage() {
    populateInfo();
    createEventListener();
}
if (window.addEventListener) {
    window.addEventListener('load', setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', setUpPage);
}

// END AMENITIES