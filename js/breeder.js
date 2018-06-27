'use strict';

/* Build: Breeder Form to HTML */

// The idea here is to create an interactive form with multiple fields that can be populated with dog info

// Build one field with dog ID and then add more features after implementation

// Hard code Data for test population of tables, change to input data later.

/**************GLOBAL **************/
var dataDogsTemporaryData = []; // make a dogData constructor

function DogDataConstructor(dogID) {
  this.dogID = dogID;
}

//Adding table to HTML
var table = document.getElementById('dogTable');

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = 'DOG1';
cell2.innerHTML = 'Test row/column';
// need logic for auto generating new table based on the data set


// Form for creating data with  Name, gender, DOB, story, img(fileupload)
  // Name field is a string
  // Gender is Boolean(? two options, male female)
  // Story is a text/string field


// Table will need an expansive field to input "string" value.
// Drop down for number of pups
// ?How many columns/rows need to be added?
// add field button
// update entry button
// remove field button

// Attach table to HTML!!!!!!!!!!!!!!!!!!

// Stringafy data into JSON for local data storage