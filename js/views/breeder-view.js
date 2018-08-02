'use strict';

var app = app || {};

(function(module) {
  var breederView = {};

  breederView.initIndexPage = () => {
    let puppyList = app.Puppy.all;
    $('#featured-view').empty();
    app.showOnly('#home');
    for (var i = 0; i < 2; i++) {
      $('#featured-view').append(puppyList[Math.floor(Math.random() * puppyList.length)].toHtml('featured-puppy-template'));
    }
  };

  breederView.initBreederForm = () => {
    app.showOnly('#add-puppy');
    $('#add-puppy-form').on('submit', (event) => {
      event.preventDefault();
      let newPuppy = {
        name: event.target.name.value,
        gender: event.target.gender.value,
        birthdate: event.target.birthdate.value,
        image_url: event.target.image_url.value,
        story: event.target.story.value,
      };
      module.Puppy.create(newPuppy);
    });
  };

  module.breederView = breederView;
})(app);




