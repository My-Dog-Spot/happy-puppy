// create a variable for the location in the DOM where the images will go
var featuredImgLeftEl = document.getElementById('featured-left');
var featuredImgRightEl = document.getElementById('featured-right');

// variable for manipulating image size
var featuredImageHeight = 300;
var featuredImageWidth = 400;

// retrieve the portrait for the featured dogs and size them appropriately
featuredImgLeftEl.src = dog[featDogs[0]].portrait;
featuredImgLeftEl.height = featuredImageHeight;
featuredImgLeftEl.width = featuredImageWidth;
featuredImgRightEl.src = dog[featDogs[1]].portrait;
featuredImgRightEl.height = featuredImageHeight;
featuredImgRightEl.width = featuredImageWidth;


