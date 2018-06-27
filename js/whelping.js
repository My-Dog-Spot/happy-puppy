'use strict';

// TODO: image display
// TODO: link to application page (listener)

// instantiate a sample Dog object for use in renderWhelpingHeaderRow and renderWhelpingBodyRow
var currentDogObject = new Dog();
// store the various keys from the Dog object for use as headings
var dogPropertiesArrayForHeader = Object.keys(currentDogObject);

// store table element in global variable
var whelpingTableEl = document.getElementById('whelping-box-table');


var whelpingDogArray = JSON.parse(localStorage.getItem(localStorageDogKey));

// dummy data for rendering table
var dog1 = new Dog('birthdate1', 'name1', 'story1', 'portrait1', 'gender1', 'owner1');
var dog2 = new Dog('birthdate2', 'name2', 'story2', 'portrait2', 'gender2', 'owner2');
var dog3 = new Dog('birthdate3', 'name3', 'story3', 'portrait3', 'gender3', 'owner3');
whelpingDogArray = [dog1, dog2, dog3];

// renders the header row for the table
function renderWhelpingHeaderRow() {

  // tr1 - create table row element for table
  var headerRow = document.createElement('tr');

  // tr2 - append table row element to table element
  whelpingTableEl.appendChild(headerRow);

  // create blank table data element to occupy top left cell of table
  // var blankCell = document.createElement('th');
  // headerRow.appendChild(blankCell);

  // create headers and append to the header row
  for(var i = 0; i < dogPropertiesArrayForHeader.length; i++) {
    // th1 - create table heading element
    var headingEl = document.createElement('th');
    // th2 - label the headings
    headingEl.textContent = dogPropertiesArrayForHeader[i];
    // th3 - append to the DOM
    headerRow.appendChild(headingEl);
  }
}

// renders the body row for the table
function renderWhelpingBodyRow(dogObject) {

  // create a reference to the passed object
  currentDogObject = dogObject;

  // tr1 - create table row element for table
  var bodyRow = document.createElement('tr');

  // append a row heading to the start of the row
  // var rowHeading = document.createElement('th');
  // rowHeading.textContent = currentDogObject.id;
  // bodyRow.appendChild(rowHeading);

  // tr2 - append table row element to table element
  whelpingTableEl.appendChild(bodyRow);

  // loop through the object's properties and append each one's value to the row
  for(var i = 0; i < dogPropertiesArrayForHeader.length; i++) {
    // th1 - create table data element
    var rowDataEl = document.createElement('td');
    // th2 - insert the data
    rowDataEl.textContent = currentDogObject[dogPropertiesArrayForHeader[i]];
    // th3 - append to the DOM
    bodyRow.appendChild(rowDataEl);
  }
}

function renderWhelpingBodyRowAll() {
  // loop through the given array and activate each object's
  // calculate and render methods
  for(var i = 0; i < whelpingDogArray.length; i++) {
    // use the object's data to render the table's body rows
    renderWhelpingBodyRow(whelpingDogArray[i]);
  }  
}

// renders the header and the body
function renderWhelpingTable() {
  // render the heading row
  renderWhelpingHeaderRow();
  // render all body rows
  renderWhelpingBodyRowAll();
}

renderWhelpingTable();