'use strict';

// TODO: image display
// TODO: link to application page (listener)
// TODO: Get headings to proper case
// TODO: Don't display id nor portential owner

var tableLinkRef = 'application.html';

// instantiate a sample Dog object for use in renderWhelpingHeaderRow and renderWhelpingBodyRow
var currentDogObject = new Dog();

// store the various keys from the Dog object for use as headings
var dogPropertiesArrayForHeader = ['portrait', 'name', 'birthdate', 'gender', 'story'];

// retrieve the dogs stored in localSorage
var whelpingDogArray = JSON.parse(localStorage.getItem(localStorageDogKey));

// store table element in global variable
var whelpingTableEl = document.getElementById('whelping-box-table');

// renders the header row for the table
function renderWhelpingHeaderRow() {

  // tr1 - create table row element for table
  var headerRow = document.createElement('tr');

  // tr2 - append table row element to table element
  whelpingTableEl.appendChild(headerRow);

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

  // tr2 - append table row element to table element
  whelpingTableEl.appendChild(bodyRow);

  // loop through the object's properties and append each one's value to the row
  for(var i = 0; i < dogPropertiesArrayForHeader.length; i++) {
    var currentProperty = dogPropertiesArrayForHeader[i];

    // th1 - create table data element
    var rowDataEl = document.createElement('td');

    // if this element is a portrait or a name, make it a link
    if(currentProperty === 'portrait' ||
    currentProperty === 'name') {
      
      // anchorEl1 - create anchor data element
      var anchorEl = document.createElement('a');
      // anchorEl2 - fill the anchor tag's href with the link data
      anchorEl.href = tableLinkRef;
      anchorEl.textContent = currentDogObject[currentProperty];
      // anchorEl3 - append to the row
      rowDataEl.appendChild(anchorEl);
      
      // // if this element is a portrait, make it display
      // if(currentProperty === 'portrait') {
      //   // handle portrait
      //   // imageEl1 - create anchor data element
      //   var imageEl = document.createElement('img');
      //   // imageEl2 - fill the img tag's src reference with the correct data
      //   imageEl.src = currentDogObject.portrait;
      //   // imageEl3 - append to the anchor
      //   anchorEl.appendChild(imageEl);
      //   console.log(rowDataEl);

      //   // <a href="https://www.w3schools.com">
      //   //   <img border="0" alt="W3Schools" src="logo_w3s.gif" width="100" height="100">
      //   // </a>
      //   // th2 - insert the data
      //   // anchorEl.textContent = currentDogObject[currentProperty];
      // } else {
      // th2 - insert the data

      // }

    
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