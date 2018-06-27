'use strict';

var dogTestArray= [];

// var formElement = document.getElementById('form-insert');

//constructor taking form submit data and adding to array
function ArrayDogConstructor(name, dob){
  this.name = name;
  this.dob = dob;
  dogTestArray.push(this);

}
new ArrayDogConstructor('JimBoi');
new ArrayDogConstructor('dogs');
// console.log('Array: ' + dogTestArray);

// var submitCheck = document.forms['form1', 'form2'].submit();
// console.log('Saved data? ', submitCheck);

// submitForms = function(){
//   new ArrayDogConstructor(document.forms['form1', 'form2'].submit());
// };

//creating initial add button that when pushed starts form functionality
// var formCallButton =
console.log(dogTestArray);

var createDogFromFormInput = function(event) {
  event.preventDefault();
  // console.log(event.target.button);    
  var nameSubmitInput = event.target.querySelectorAll('[name=pname]')[0].value;
  // console.log(nameSubmitInput);
  // add from submission check to assign constructor.
  var bdaySubmitInput = event.target.querySelectorAll('[name=bday]')[0].value;
  new ArrayDogConstructor(nameSubmitInput, bdaySubmitInput);
  console.log(dogTestArray);
};


document.getElementById('form-insert').addEventListener('submit', createDogFromFormInput);



  // create form on the "form-insert" id
  // form should create 1 form field and then build other parts of the field