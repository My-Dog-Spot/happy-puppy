'use strict';

var app = app || {};

(function(module) {
  let breederView = {};

  breederView.initWhelpingPage = (context) => {
    $('#whelping-box').empty();
    app.showOnly('#whelping-container');
    module.Puppy.all.forEach(puppy => $('#whelping-box').append(puppy.toHtml('breeder-puppy-list-template')));
  };

  breederView.initIndexPage = () => {
    let puppyList = app.Puppy.all;
    let featuredViewElement =$('#featured-view');
      featuredViewElement.empty();
    app.showOnly('#home');
    for (let i = 0; i < 2; i++) {
        featuredViewElement.append(puppyList[Math.floor(Math.random() * puppyList.length)].toHtml('featured-puppy-template'));
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
