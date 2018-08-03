// // Create variables for the location in the DOM where the images will go
// var featureLeftDivEl = $('#featured-left-div');
// var featureRightDivEl = $('#featured-right-div');


// // TYLER - Commenting out featured badge stuff, no longer needed
// // // Specify the feature badge to overlay on the featured dog.
// // var featureBadgePath = "img/Uncyclopedia_Featured.png";

// // // Variable for manipulating image size
// // var featuredImageHeight = 300;
// // var featuredImageWidth = 400;

// function renderFeaturedDogs() {

//   // Retrieve the portrait for the featured dogs and size them appropriately
//   // left image
//   var leftFeaturedImgEl = document.createElement('img');
//   leftFeaturedImgEl.id = 'featured-left';
//   leftFeaturedImgEl.src = dog[featDogs[0]].portrait;
//   // TYLER - Image sizing should generally be handled by css
//   // leftFeaturedImgEl.height = featuredImageHeight;
//   // leftFeaturedImgEl.width = featuredImageWidth;
//   featureLeftDivEl.appendChild(leftFeaturedImgEl);

//   // feature badge overlay on left image
//   var leftFeaturedImgBadgeEl = document.createElement('img');
//   leftFeaturedImgBadgeEl.id = 'badge';
//   leftFeaturedImgBadgeEl.src = featureBadgePath;
//   featureLeftDivEl.appendChild(leftFeaturedImgBadgeEl);

//   // overlay the dogs litter name
//   var leftFeaturedDogNameEl = document.createElement('p');
//   leftFeaturedDogNameEl.id = 'name-tag';
//   leftFeaturedDogNameEl.textContent = dog[featDogs[0]].name;
//   featureLeftDivEl.appendChild(leftFeaturedDogNameEl);

//   // right image
//   var rightFeaturedImgEl = document.createElement('img');
//   rightFeaturedImgEl.id = 'featured-right';
//   rightFeaturedImgEl.src = dog[featDogs[1]].portrait;
//   rightFeaturedImgEl.height = featuredImageHeight;
//   rightFeaturedImgEl.width = featuredImageWidth;
//   featureRightDivEl.appendChild(rightFeaturedImgEl);

//   // feature badge overlay on right image
//   var rightFeaturedImgBadgeEl = document.createElement('img');
//   rightFeaturedImgBadgeEl.id = 'badge';
//   rightFeaturedImgBadgeEl.src = featureBadgePath;
//   featureRightDivEl.appendChild(rightFeaturedImgBadgeEl);

//   // overlay the dogs litter name
//   var rightFeaturedDogNameEl = document.createElement('p');
//   rightFeaturedDogNameEl.id = 'name-tag';
//   rightFeaturedDogNameEl.textContent = dog[featDogs[1]].name;
//   featureRightDivEl.appendChild(rightFeaturedDogNameEl);
// }

// renderFeaturedDogs();


'use strict';

var app = app || {};

(function(module){

  let productionApiUrl = 'https://my-dog-spot.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction= /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  // Initiate nav functionality 
  $('#menu').on('click', () => {
    if ($('nav').hasClass('flexed')) {
      $('nav').removeClass('flexed');
    } else {
      $('nav').addClass('flexed');
    }
  });

  //  Display functions
  module.showOnly = (selector) => {
    $('.js-container').hide();
    $(selector).show();
  };

  module.render = (templateId, data) => {
    module.template = Handlebars.compile($(`#${templateId}`).text());
    return module.template(data);
  };

})(app);










// Hide/show for nav menu

// $('#menu').on('click', () => {
//   if ($('nav').hasClass('flexed')) {
//     $('nav').removeClass('flexed');
//   } else {
//     $('nav').addClass('flexed');
//   }
// });