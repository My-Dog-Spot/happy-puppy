'use strict';
/**
 * TODO
 */

// A set of dog instances.
var dog = [];

// A set of featured dogs.
var featDogs = [];

// A set of person instances
var personArray = [];

// The local storage dog key
var localStorageDogKey = 'happy-puppy-dog-storage';
var localStorageFeatDogKey = 'happy-puppy-featured-dogs';

/**
 * Product Object with constructor and methods.
 */
function Dog(portrait, name, birthdate, gender, story) {
  this.portrait = portrait;
  this.name = name;
  this.birthdate = birthdate;
  this.gender = gender;
  this.story = story;
  this.id = id();
  // TODO - add in medical records (stretch goal)
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
  // (portrait, name, birthdate, gender, story)
  dog.push(new Dog('img/can-u-beat-my-adorability-score.png', 'Shrek', '05/19/2018', 'male', 'Like his namesake, he is a confident and independent, though not very green!'));
  dog.push(new Dog('img/powtee-scowtee.png', 'Donkey', '05/19/2018', 'male', 'This one is happy, energetic, and always playful. "Man, it\'s good to be free!"'));
  dog.push(new Dog('img/we-need-some-time-apart.png', 'Princess Fiona', '05/19/2018', 'female', 'She is a proper princess! She\'s a little standoffish, and a little unsure about her brothers. "It talks!"'));
  dog.push(new Dog('img/cairn-terriers-hero.jpg', 'Hannah', '03/01/2018', 'female', 'Oh boy! She is loud and in charge! Always alert and active. "What do you mean, you don\'t know?"'));
  dog.push(new Dog('img/cairn-terriers-3.jpg', 'Bo Peep', '03/01/2018', 'female', 'Gentle, sensitive, and nuturing towards her siblings, a lovely and sweet pup. "Potato Head!"'));
  dog.push(new Dog('img/cairn-terriers-12.jpg', 'Mrs Davis', '03/01/2018', 'female', 'An old soul, wise beyond her weeks. "humph"'));
}

function initializeFeaturedDogs() {
  // generate random number based on index of dog set
  var randomIndexOne = Math.floor(Math.random() * dog.length);
  // push dog at that index into featured dogs
  featDogs.push(randomIndexOne);
  // generate random number based on index of dog set
  var randomIndexTwo = Math.floor(Math.random() * dog.length);
  // ensure there are no repeat selections
  while(randomIndexOne === randomIndexTwo) {
    randomIndexTwo = Math.floor(Math.random() * dog.length);
  }
  // push dog at that index into featured dogs
  featDogs.push(randomIndexTwo);
}

// initialize person instances
function initializePersons() {
  var customer = new Person('Jed', 'I', 'Knight', null, null);
  customer.reserveDog(dog[0]);
  personArray.push(customer);

  customer = new Person('Bud', null, 'Light', null, null);
  customer.reserveDog(dog[1]);
  personArray.push(customer);

  customer = new Person('Chris', 'P', 'Bacon', null, null);
  customer.reserveDog(dog[2]);
  personArray.push(customer);
}

/**
 * Use the browsers HTML 5 local storage capability to save or load the users dog data.
 * This is a 201 hack since we're not yet able to persist to back end.
 */
function saveDogsToLocalStorage() {
  localStorage.setItem(localStorageDogKey, JSON.stringify(dog));
  localStorage.setItem(localStorageFeatDogKey, JSON.stringify(featDogs));
}

function loadResultsFromStorage() {
  dog = JSON.parse(localStorage.getItem(localStorageDogKey));
}

//Initialize instances for development sake.
initializeDogSet();
initializeFeaturedDogs();
initializePersons();

saveDogsToLocalStorage();