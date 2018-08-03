'use strict';

var app = app || {};

(function (module) {

  let errorCallback = err => {
    console.error(err);
    module.errorView.initErrorPage(err);
  };

  // TODO migrate from shelterPuppy to shelterPet naming convention
  // TODO make sure an event handler is setup to eventually trigger this, and take the result map image back and set
  // it on the pet object.
  module.getGoogleAPIMap = (shelterPuppy, callback) => {
    https://maps.googleapis.com/maps/api/staticmap?center=Seattle,WA&zoom=14&size=400x400&key=AIzaSyCoa82Tc5QBJrI1JRQjR8dc7_GuPB8Fhpk'>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/shelter-location`, shelterPuppy)
      .then(callback) // TODO Implement the callback method
      .catch(errorCallback);
  };

})(app);
