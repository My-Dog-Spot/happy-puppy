'use strict';

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
    $.get(`http://api.petfinder.com/pet.find?key=7d4d266f8529bb64239eba2ebbd5eba2&format=json&location=${postalCode}&animal=dog`)
      .then((data) => data.petfinder.pets.pet)
      .then(ShelterPuppy.loadAll)
      .then(callback)
      .catch(console.error);
  };

  module.ShelterPuppy = ShelterPuppy;
})(app);
