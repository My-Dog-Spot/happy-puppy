'use strict';

// variable for storing the array of dog objects from local storage
var breederDogArray = JSON.parse(localStorage.getItem(localStorageDogKey));

// location for the links in the table
var tableLinkRef = '';

// adjust image size, keeping ratio
var imageScale = 4;
// adjust image size
var tableImageWidth = 40 * imageScale;
var tableImageHeight = 30 * imageScale;

// instantiate a sample Dog object for use in renderBreederHeaderRow and renderBreederBodyRow
var currentDogObject = new Dog();

// store the various keys from the Dog object for use as headings
var dogPropertiesArrayForHeader = ['Portrait', 'Name'];

// store table element in global variable
var breederTableEl = document.getElementById('breeder-box-table');

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

  // Reset/Clear form inputs on submit button click
  document.getElementById('form-insert').reset();

  localStorage.setItem(localStorageDogKey, JSON.stringify(breederDogArray));
  alert('You have saved ' + newDogFromForm.name + ' to the whelping box!');

  renderBreederTable();
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


// Start Table Display
// renders the body row for the table
function renderBreederBodyRow(dogObject) {

  // create a reference to the passed object
  currentDogObject = dogObject;

  // tr1 - create table row element for table
  var bodyRow = document.createElement('tr');

  // tr2 - append table row element to table element
  breederTableEl.appendChild(bodyRow);

  // loop through the object's properties and append each one's value to the row
  for(var i = 0; i < dogPropertiesArrayForHeader.length; i++) {
    var currentProperty = dogPropertiesArrayForHeader[i].toLowerCase();

    // th1 - create table data element
    var rowDataEl = document.createElement('td');

    // if this element is a portrait or a name, make it a link
    if(currentProperty === 'portrait' ||
    currentProperty === 'name') {
      
      // anchorEl1 - create anchor data element
      var anchorEl = document.createElement('a');
      
      anchorEl.href = tableLinkRef;

      if(currentProperty === 'name') {
        // anchorEl2 - fill the anchor tag's href with the link data
        anchorEl.textContent = currentDogObject[currentProperty];
      }
     
      // anchorEl3 - append to the row
      rowDataEl.appendChild(anchorEl);
      
      // if this element is a portrait, make it display
      if(currentProperty === 'portrait') {
        // handle portrait
        // imageEl1 - create anchor data element
        var imageEl = document.createElement('img');
        // imageEl2 - fill the img tag's src reference with the correct data
        imageEl.src = currentDogObject.portrait;
        imageEl.width = tableImageWidth;
        imageEl.height = tableImageHeight;
        // imageEl3 - append to the anchor
        anchorEl.appendChild(imageEl);
      }

      // th3 - append to the DOM
      bodyRow.appendChild(rowDataEl);

      // otherwise, insert usual data
    } else {

      // th2 - insert the data
      rowDataEl.textContent = currentDogObject[currentProperty];
      // th3 - append to the DOM
      bodyRow.appendChild(rowDataEl);
    }
  }
}

function renderBreederBodyRowAll() {
  // loop through the given array and activate each object's
  // calculate and render methods
  for(var i = 0; i < breederDogArray.length; i++) {
    // use the object's data to render the table's body rows
    renderBreederBodyRow(breederDogArray[i]);
  }
}

// renders the header and the body
function renderBreederTable() {
  // reset table contents
  breederTableEl.innerText = '';
  // render all body rows
  renderBreederBodyRowAll();
}

renderBreederTable();