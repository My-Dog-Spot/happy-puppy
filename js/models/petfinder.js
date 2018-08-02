'use strict';

var app = app || {};

(function(module){

  function ShelterPuppy(rawPuppyObj) {
    Object.keys(rawPuppyObj).forEach(key => this[key] = rawPuppyObj[key]);
  }

  ShelterPuppy.all = [];
  let rawData = [];

  ShelterPuppy.prototype.toHtml = function(templateId) {
    return app.render(templateId, this);
  };

  ShelterPuppy.loadAll = rows => ShelterPuppy.all = rows.map(puppyRawData => new ShelterPuppy(puppyRawData));

  ShelterPuppy.find = (zipcode, callback) =>
    $.get('http://api.petfinder.com/pet.find?key=7d4d266f8529bb64239eba2ebbd5eba2&format=json&location=98258&animal=dog')
      .then((data) => rawData.all = data.petfinder.pets.pet)
      .then(callback)
      .catch(console.error);

  module.ShelterPuppy = ShelterPuppy;
})(app);