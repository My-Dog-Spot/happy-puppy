'use strict';

let data = {};

var api =function() {
  $.ajax({
    // type:GET,
    url:'http://api.petfinder.com/pet.find?key=7d4d266f8529bb64239eba2ebbd5eba2&format=json&location=98121&animal=dog',
    dataType: 'json',
    success: function (jsonData) {
    }
  })
    .then(jsonData =>{ data = jsonData.petfinder.pets.pet;});

};

api();

console.log(data);