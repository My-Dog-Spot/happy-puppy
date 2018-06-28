// Create variables for the location in the DOM where the images will go
var featureLeftDivEl = document.getElementById('featured-left-div');
var featureRightDivEl = document.getElementById('featured-right-div');

// Specify the feature badge to overlay on the featured dog.
var featureBadgePath = "img/Uncyclopedia_Featured.png";

// Variable for manipulating image size
var featuredImageHeight = 300;
var featuredImageWidth = 400;

function renderFeaturedDogs() {

  // Retrieve the portrait for the featured dogs and size them appropriately
  // left image
  var leftFeaturedImgEl = document.createElement('img');
  leftFeaturedImgEl.id = 'featured-left';
  leftFeaturedImgEl.src = dog[featDogs[0]].portrait;
  leftFeaturedImgEl.height = featuredImageHeight;
  leftFeaturedImgEl.width = featuredImageWidth;
  featureLeftDivEl.appendChild(leftFeaturedImgEl);

  // feature badge overlay on left image
  var leftFeaturedImgBadgeEl = document.createElement('img');
  leftFeaturedImgBadgeEl.id = 'badge';
  leftFeaturedImgBadgeEl.src = featureBadgePath;
  featureLeftDivEl.appendChild(leftFeaturedImgBadgeEl);

  // overlay the dogs litter name
  var leftFeaturedDogNameEl = document.createElement('p');
  leftFeaturedDogNameEl.textContent = dog[featDogs[0]].name;
  featureLeftDivEl.appendChild(leftFeaturedDogNameEl);

  // right image
  var rightFeaturedImgEl = document.createElement('img');
  rightFeaturedImgEl.id = 'featured-right';
  rightFeaturedImgEl.src = dog[featDogs[1]].portrait;
  rightFeaturedImgEl.height = featuredImageHeight;
  rightFeaturedImgEl.width = featuredImageWidth;
  featureRightDivEl.appendChild(rightFeaturedImgEl);

  // feature badge overlay on right image
  var rightFeaturedImgBadgeEl = document.createElement('img');
  rightFeaturedImgBadgeEl.id = 'badge';
  rightFeaturedImgBadgeEl.src = featureBadgePath;
  featureRightDivEl.appendChild(rightFeaturedImgBadgeEl);

  // overlay the dogs litter name
  var rightFeaturedDogNameEl = document.createElement('p');
  rightFeaturedDogNameEl.textContent = dog[featDogs[1]].name;
  featureRightDivEl.appendChild(rightFeaturedDogNameEl);
}

renderFeaturedDogs();