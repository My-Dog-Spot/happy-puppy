'use strict';
/**
 * TO
 */

// A set of dog instances.
var dog = [];

var person = [];

// The local storage dog key
var localStorageDogKey = 'happy-puppy-dog-storage';

// reserving from the Dog constructor

/**
 * Product Object with constructor and methods.
 */
function Dog(birthdate, name, story, portrait, gender) {
  this.id = id();
  this.birthdate = birthdate;
  this.name = name;
  this.story = story;
  // TODO - add in medical records (stretch goal)
  this.portrait = portrait;
  this.gender = gender;
  this.owner = owner;
}

// associated with the Dog object to reserve dogs
function Person() {
  var reserveDog = Dog();
}

// personal info of customers
function PersonalInfo(firstName, middleName, lastName, namePrefix, nameSuffix) {
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
  this.namePrefix = namePrefix;
  this.nameSuffix = nameSuffix;
}



/**
 * This is from https://gist.github.com/gordonbrander/2230317
 * TODO: how to import, as opposed to copy/paste the code?
 */
var id = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};


/**
 * Convenience method to initialize dog array with instances.
 */
function initializeDogSet() {
  dog.push(new Dog());
  dog.push(new Dog());
  dog.push(new Dog());
  dog.push(new Dog());
  dog.push(new Dog());
  dog.push(new Dog());
}

// initialize person instances
new


/**
 * Use the browsers HTML 5 local storage capability to save or load the users dog data.
 * This is a 201 hack since we're not yet able to persist to back end.
 */
function saveResultsToLocalStorage() {
  localStorage.setItem(localStorageDogKey, JSON.stringify(dog));
}

function loadResultsFromStorage() {
  dog = JSON.parse( localStorage.getItem(localStorageDogKey) );
}

//Instantiate product objects
initializeDogSet();

saveResultsToLocalStorage();
saveResultsToLocalStorage();