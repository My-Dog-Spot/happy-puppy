'use strict';

var app = app || {};

(function(module) {
    var puppyView = {};

    puppyView.initIndexPage = () => {
        let puppyList = app.Puppy.all;
        app.mobileNav();
        $('#featured-view').empty();
        app.showOnly('#home');
        for (var i = 0; i < 2; i++) {
            $('#featured-view').append(puppyList[Math.floor(Math.random() * puppyList.length)].toHtml('featured-puppy-template'));
        };    
    };




    // TYLER - This is a potential function for breeder puppy details; STRETCH GOAL
    // puppyView.initPuppyDetail = context => {
    //     let singlePuppy = new app.Puppy(context);
    //     $('#puppy-detail').empty();
    //     app.showOnly('#puppy-detail');
    //     $('#puppy-detail').append(singlePuppy.toHtml('puppy-detail-template'));
    // }

    puppyView.initSearchForm = () => {
        app.showOnly('.search-view');

        $('#puppy-search').on('submit', function(event) {
            event.preventDefault();

            let puppy = {
                location: event.target.zipcode.value || '',
            }

            module.ShelterPuppy.find(puppy, initSearchResultsPage);

            event.target.zipcode.value = '';
        });
    };

    puppyView.initSearchResultsPage = () => {
        app.showOnly('#search-results');
        $('#search-list').empty();

        module.Puppy.all.forEach(puppy => $('#search-list').append(puppy.toHtml()));
    }

    module.puppyView = puppyView;
})(app);