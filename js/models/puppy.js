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

(function(module){

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Puppy(rawPuppyObj) {
    Object.keys(rawPuppyObj).forEach(key => this[key] = rawPuppyObj[key]);
    let myRegex = /^.{10}/g;
    this.birthdate = myRegex.exec(this.birthdate);
  }

  Puppy.all = [];

  Puppy.prototype.toHtml = function(templateId) {
    return app.render(templateId, this);
  };

  Puppy.loadAll = rows => Puppy.all = rows.sort((a,b) => a.birthdate - b.birthdate).map(puppyRawData => new Puppy(puppyRawData));

  Puppy.create = puppy =>
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/puppies`, puppy)
      .then(() => page('/'))
      .catch(errorCallback);

  Puppy.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/puppies`)
      .then(Puppy.loadAll)
      .then(callback)
      .catch(console.error);

  module.Puppy = Puppy;
})(app);
