'use strict';

var dogTestArray= [];


//constructor taking form submit data and adding to array
function ArrayDogConstructor(name, dob, story, img, gender){
  this.name = name;
  this.dob = dob;
  this.story = story || '';
  this.img = img || '';
  this.gender = gender;
  dogTestArray.push(this);
}
// From form in HTML, take user input and store in variables before being passed to the constructor to create new dogs.
var createDogFromFormInput = function(event) {
  event.preventDefault();  
  var nameSubmitInput = event.target.querySelectorAll('[name=pname]')[0].value;
  var bdaySubmitInput = event.target.querySelectorAll('[name=bday]')[0].value;
  var genderSubmitInput = event.target.querySelector('input[name="answer"]:checked').value;
  var storySubmitText = event.target.querySelector('textarea[name="story-text"]').value;
  var chunkDropdown = event.target.querySelector('#pet-img-select');
  var imgPetDropDown = chunkDropdown.options[chunkDropdown.selectedIndex].value;
  new ArrayDogConstructor(nameSubmitInput, bdaySubmitInput, storySubmitText, imgPetDropDown, genderSubmitInput);
  console.log(dogTestArray);
};
// Event listener to new dog submission.
document.getElementById('form-insert').addEventListener('submit', createDogFromFormInput);

// Remove is the opposite of appendchild. Used unique ID to 
// document .getElementById("myTable").deleteRow(0)




<main>
    <h1> Here are our puppies! </h1>

    <form id="form-insert">
      <!-- Name  -->
      <label for="pname"> Pup name: </label>
      <input id="name-input" type="text" name="pname" required>
      <!-- DOB -->
      <label for="bday">Birthday: </label>
      <input id="dob-input" type="date" name="bday" required>
      <!-- Gender -->
      <fieldset>
        <legend>Gender: </legend>
        <input id="male" name="answer" type="radio" value="Male" checked="true" />
        <label for="male"> Male </label>
        <input id="female" name="answer" type="radio" value="Female" />
        <label for="female"> Female </label>
      </fieldset>
      <!-- Story input field -->
      <label for="story-text"> Dog Story: </label>
      <textarea name="story-text" rows=3 cols=30></textarea>
      <label for="pet-select">Pet img:</label>
      <select id="pet-img-select" required>
        <option value="img/cairn-terriers-1.jpg" selected> cairn-terriers-1</option>
        <option value="img/cairn-terriers-2.jpg">Cat</option>
      </select> ****FIX****
      <!-- Submit Button -->
      <button id="button" type="submit" form="form-insert"> Submit </button>
    </form>

    <table id="whelping-box-table"> This is where the table goes </table>

  </main>