'use strict';

var firstName, lastName, middleName, prefix, suffix, button;

// need to get elements by ID 
firstName = document.getElementById('firstName');
// need to create an event listener function
button = document.getElementById('button');
button.addEventListener(click, Person.addPerson);

// create callback function
// need to push info as new Person
// need to save to local storage

// need to call event listener
