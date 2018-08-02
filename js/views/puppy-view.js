'use strict';

var app = app || {};

(function(module) {
    var puppyView = {};

    puppyView.initSearchForm = () => {
        app.showOnly('#search-view');

        $('#puppy-search').on('submit', function(event) {
            event.preventDefault();

            let puppy = {
                location: event.target.zipcode.value || '',
            };

            module.ShelterPuppy.find(puppy.location, puppyView.initSearchResultsPage);

            event.target.zipcode.value = '';
        });
    };

    puppyView.initSearchResultsPage = () => {
        $('#search-list').empty();
        app.ShelterPuppy.all.forEach(puppy => $('#search-results').append(puppy.toHtml('puppy-list-template')));

    }

    module.puppyView = puppyView;
})(app);
