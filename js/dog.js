'use strict';
/**
 * TO
 */

// A set of dog instances.
var dog = [];

// A set of person instances
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
  this.potentialOwner;
}

Dog.prototype.setPotentialOwner = function(potentialOwner) {
  this.potentialOwner = potentialOwner;
};


// personal info of customers
function Person(firstName, middleName, lastName, namePrefix, nameSuffix) {
  this.id = id();
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
  this.namePrefix = namePrefix;
  this.nameSuffix = nameSuffix;
  this.reservedDog = [];
}


// reserving dogs
Person.prototype.reserveDog = function(chosenDog) {
  this.reservedDog.push(chosenDog);
  chosenDog.setPotentialOwner(this.id);
};


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
  dog.push(new Dog('05/19/2018', 'Shrek', 'Like his namesake, he is a confident and independent, though not very green!', 'img/can-u-beat-my-adorability-score.png', 'male'));
  dog.push(new Dog('05/19/2018', 'Donkey', 'This one is happy, energetic, and always playful. "Man, it\'s good to be free!"', 'img/powtee-scowtee.png', 'male'));
  dog.push(new Dog('05/19/2018', 'Princess Fiona', 'She is a proper princess! She\'s a little standoffish, and a little unsure about her brothers. "It talks!"', 'img/we-need-some-time-apart.png', 'female'));
  dog.push(new Dog('03/01/2018', 'Hannah', 'Oh boy! She is loud and in charge! Always alert and active. "What do you mean, you don\'t know?"', 'img/cairn-terriers-hero.jpg', 'female'));
  dog.push(new Dog('03/01/2018', 'Bo Peep', 'Gentle, sensitive, and nuturing towards her siblings, a lovely and sweet pup. "Potato Head!"', 'img/cairn-terriers-3.jpg', 'female'));
  dog.push(new Dog('03/01/2018', 'Mrs Davis', 'An old soul, wise beyond her weeks. "humph"', 'img/cairn-terriers-12.jpg', 'female'));
}

// initialize person instances
function initializePersons() {
  var customer = new Person();
  customer.reserveDog(dog[0]);
  person.push(customer);

  customer.reserveDog(dog[1]);
  person.push(customer);

  customer.reserveDog(dog[2]);
  person.push(customer);
}


/**
 * Use the browsers HTML 5 local storage capability to save or load the users dog data.
 * This is a 201 hack since we're not yet able to persist to back end.
 */
function saveDogResultsToLocalStorage() {
  localStorage.setItem(localStorageDogKey, JSON.stringify(dog));
}

function loadResultsFromStorage() {
  dog = JSON.parse(localStorage.getItem(localStorageDogKey));
}
// --------------------------------------------------------------------------------
// function savePersonResultsToLocalStorage() {
//   localStorage.setItem(localStoragePerson, JSON.stringify(person));
// }

// function loadResultsFromStorage() {
//   person = JSON.parse(localStorage.getItem(localStoragePerson));
// }

//Instantiate product objects
initializeDogSet();
initializePersons();

saveDogResultsToLocalStorage();
// savePersonResultsToLocalStorage();