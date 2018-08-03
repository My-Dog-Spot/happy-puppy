'use strict';

var app = app || {};

(function(module) {
    let businessView = {};

    businessView.initContactPage = () => {
        app.showOnly('#contact-info');
    };

    businessView.initAboutPage = () => {
        app.showOnly('#about');
    };

  module.businessView = businessView;
})(app);




