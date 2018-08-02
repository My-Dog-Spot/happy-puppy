'use strict';

var app = app || {};

(function(module){

  function Address(rawAddressObj) {
      this.city = rawAddressObj.city.$t;
      this.state = rawAddressObj.state.$t;
  }

  function ShelterPuppy(rawPuppyObj) {
    this.name = rawPuppyObj.name.$t;
    this.age = rawPuppyObj.age.$t;
    this.gender = rawPuppyObj.sex.$t;
    this.story = rawPuppyObj.description.$t;
    this.contactLocation = rawPuppyObj.contact.city.$t;
    this.image_url = rawPuppyObj.media.photos.photo[3].$t;
  }

  ShelterPuppy.all = [];

  ShelterPuppy.prototype.toHtml = function(templateId) {
    return app.render(templateId, this);
  };

  ShelterPuppy.loadAll = rows => {
      console.log(rows);
      ShelterPuppy.all = rows.map(puppyRawData => new ShelterPuppy(puppyRawData));
  }

  ShelterPuppy.find = (zipcode, callback) => 
    $.get(`http://api.petfinder.com/pet.find?key=7d4d266f8529bb64239eba2ebbd5eba2&format=json&location=${zipcode}&animal=dog`)  
    .then((data) => data.petfinder.pets.pet)
    .then(ShelterPuppy.loadAll)
    .then(callback)
    .catch(console.error);

  module.ShelterPuppy = ShelterPuppy;
})(app);




