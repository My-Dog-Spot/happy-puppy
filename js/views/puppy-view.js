'use strict';

var app = app || {};

(function(module) {
    var puppyView = {};




    // TYLER - This is a potential function for breeder puppy details; STRETCH GOAL
    // puppyView.initPuppyDetail = context => {
    //     let singlePuppy = new app.Puppy(context);
    //     $('#puppy-detail').empty();
    //     app.showOnly('#puppy-detail');
    //     $('#puppy-detail').append(singlePuppy.toHtml('puppy-detail-template'));
    // }

    puppyView.initSearchForm = () => {
        app.showOnly('#search-view');

        $('#puppy-search').on('submit', function(event) {
            event.preventDefault();

            let puppy = {
                location: event.target.zipcode.value || '',
            }

            module.ShelterPuppy.find(puppy.location, puppyView.initSearchResultsPage);

            // event.target.zipcode.value = '';
        });
    };

    puppyView.initSearchResultsPage = () => {
        app.showOnly('#search-results');
        $('#search-list').empty();

        app.ShelterPuppy.all.map(puppy => $('#search-list').append(puppy.toHtml('puppy-list-template')));

    }

    module.puppyView = puppyView;
})(app);