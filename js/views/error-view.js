'use strict';

/**
 * Key concepts: IIFE, Module Pattern, Anonymous Closing Function.
 * The var app thing and the IIFE that follows it is all a part of implementing the module pattern.
 * Decomposed functionality into self contained meaningful js files. But you can't say which runs
 * first, so that's what the first line checks for.
 * Module and app are actually the same object. It's referred to as module inside the scope of the IIFE,
 * but app outside. Then, app becomes a shared object by all the js files. The different names help to
 * make the code a little more clear.
 * https://toddmotto.com/mastering-the-module-pattern/
 * Note: better, more modern approach is to use JavaScript Class
 */

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
