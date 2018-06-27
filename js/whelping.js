'use strict';

// TODO: image display
// TODO: link to application page (listener)

var currentDogObject = new Dog();

// store table element in global variable
var whelpingTableEl = document.getElementById('whelping-box-table');

var whelpingDogArray = JSON.parse(localStorage.getItem(localStorageDogKey));

var dogPropertiesHeader = ['birthdate', 'name', 'story', 'portrait', 'gender', 'owner'];

// renders the header row for the table
function renderWhelpingHeaderRow() {

  // tr1 - create table row element for table
  var headerRow = document.createElement('tr');

  // tr2 - append table row element to table element
  whelpingTableEl.appendChild(headerRow);

  // create blank table data element to occupy top left cell of table
  var blankCell = document.createElement('th');
  headerRow.appendChild(blankCell);

  // create headers and append to the header row
  for(var i = 0; i < dogPropertiesHeader.length; i++) {
    // th1 - create table heading element
    var headingEl = document.createElement('th');
    // th2 - label the headings
    headingEl.textContent = dogPropertiesHeader[i];
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
  var rowHeading = document.createElement('th');
  rowHeading.textContent = currentDogObject.id;
  bodyRow.appendChild(rowHeading);

  // tr2 - append table row element to table element
  whelpingTableEl.appendChild(bodyRow);

  // loop through the object's properties and append each one's value to the row
  for(var i = 0; i < dogPropertiesHeader; i++) {
    // th1 - create table data element
    var rowDataEl = document.createElement('td');
    // th2 - insert the data
    rowDataEl.textContent = i;
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