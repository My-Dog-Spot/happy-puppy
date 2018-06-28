'use strict';

var breederDogArray = JSON.parse(localStorage.getItem(localStorageDogKey));

console.log(breederDogArray);

// From form in HTML, take user input and store in variables before being passed to the constructor to create new dogs.
var createDogFromFormInput = function(event) {
  event.preventDefault();  
  var nameSubmitInput = event.target.querySelectorAll('[name=pname]')[0].value;
  var bdaySubmitInput = event.target.querySelectorAll('[name=bday]')[0].value;
  var genderSubmitInput = event.target.querySelector('input[name="answer"]:checked').value;
  var storySubmitText = event.target.querySelector('textarea[name="story-text"]').value;
  var chunkDropdown = event.target.querySelector('#pet-img-select');
  var imgPetDropDown = chunkDropdown.options[chunkDropdown.selectedIndex].value;
  var newDogFromForm = new Dog(imgPetDropDown, nameSubmitInput, bdaySubmitInput, genderSubmitInput, storySubmitText);
  breederDogArray.push(newDogFromForm);

  console.log(breederDogArray);
};
// Event listener to new dog submission.
document.getElementById('form-insert').addEventListener('submit', createDogFromFormInput);

// Remove is the opposite of appendchild. Used unique ID to 
// document .getElementById("myTable").deleteRow(0)
// remove field button
// Stringafy data into JSON for local data storage
// Push into local storage
// refresh local storage
// rerender row
