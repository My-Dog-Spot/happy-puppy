'use strict';

/**
 * Key concepts: IIFE, Module Pattern, Anonymous Closing Function.
 * The var app thing and the IIFE that follows it is all a part of implementing the module pattern.
 * Decomposed functionality into self contained meaningful js files. But you can't say which runs
 * first, so that's what the first line checks for.
 * Module and app are actually the same object. It's referred to as module inside the scope of the IIFE,
 * but app outside. Then, app becomes a shared object by all the js files. The different names help to
 * make the code a little more clear.
 * https://toddmotto.com/mastering-the-module-pattern/
 * Note: better, more modern approach is to use JavaScript Class
 */

var app = app || {};

(function(module){

  // TODO Refactor so that ShelterPuppy object has association to this Address object.
  function Address(rawAddressObj) {
      this.city = rawAddressObj.city.$t;
      this.state = rawAddressObj.state.$t;
  }

  function ShelterPuppy(rawPuppyObj) {
    this.name = rawPuppyObj.name.$t;
    this.age = rawPuppyObj.age.$t;
    this.gender = rawPuppyObj.sex.$t;
    this.story = rawPuppyObj.description.$t;
    this.city = rawPuppyObj.contact.city.$t;
    this.state = rawPuppyObj.contact.state.$t;
    this.image_url = rawPuppyObj.media.photos.photo[3].$t;
    this.locationMap = `https://maps.googleapis.com/maps/api/staticmap?center=${this.city}${this.state}&zoom=14&size=400x400`;
  }

  ShelterPuppy.all = [];

  ShelterPuppy.prototype.toHtml = function(templateId) {
    return module.render(templateId, this);
  };

  ShelterPuppy.loadAll = rows => {
      console.log(rows);
      ShelterPuppy.all = rows.map(puppyRawData => new ShelterPuppy(puppyRawData));
  };

  ShelterPuppy.find = (postalCode, callback) => {
    $.get(`https://api.petfinder.com/pet.find?key=7d4d266f8529bb64239eba2ebbd5eba2&format=json&location=${postalCode}&animal=dog`)
      .then((data) => data.petfinder.pets.pet)
      .then(ShelterPuppy.loadAll)
      .then(callback)
      .catch(console.error);
  };

  module.ShelterPuppy = ShelterPuppy;
})(app);
