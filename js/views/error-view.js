'use strict';

var app = app || {};

(function (module) {
  const errorView = {};

  errorView.initErrorPage = err => {
    const errorMessageContainer = $('#error-message');
    errorMessageContainer.empty();
    app.showOnly('.error-view');

    errorMessageContainer.append(app.render('error-template', err));
  };

  module.errorView = errorView;
})(app);
