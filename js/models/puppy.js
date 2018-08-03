'use strict';

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
