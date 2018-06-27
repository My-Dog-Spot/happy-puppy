'use strict';

var dogTestArray= [];

// var formElement = document.getElementById('form-insert');

//constructor taking form submit data and adding to array
function ArrayDogConstructor(name, dob, story, img, gender){
  this.name = name;
  this.dob = dob;
  this.story = story;
  this.img = img;
  this.gender = gender || 'unspecified';
  dogTestArray.push(this);

}

console.log(dogTestArray);

var createDogFromFormInput = function(event) {
  event.preventDefault();
  // console.log(event.target.button);   
  var nameSubmitInput = event.target.querySelectorAll('[name=pname]')[0].value;

  var bdaySubmitInput = event.target.querySelectorAll('[name=bday]')[0].value;

  var genderSubmitInput = event.target.querySelector('input[name="answer"]:checked').value;

  var storySubmitText = event.target.querySelector('textarea[name="story-text"]').value;

  var imgSubmitInput = '';

  new ArrayDogConstructor(nameSubmitInput, bdaySubmitInput, storySubmitText, imgSubmitInput, genderSubmitInput);
  console.log(dogTestArray);
};


document.getElementById('form-insert').addEventListener('submit', createDogFromFormInput);



  // create form on the "form-insert" id
  // form should create 1 form field and then build other parts of the field

// Remove is the opposite of appendchild. Used unique ID to 
// document .getElementById("myTable").deleteRow(0)