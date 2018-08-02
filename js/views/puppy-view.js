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

            event.target.zipcode.value = '';
        });
    };

    puppyView.initSearchResultsPage = () => {
        $('#search-list').empty();
        puppyView.setTeasers();
        app.ShelterPuppy.all.forEach(puppy => $('#search-results').append(puppy.toHtml('puppy-list-template')));

    }

    module.puppyView = puppyView;
})(app);



// let content = $(this).parent($('.story-body'));
// let contentText = content.text();
// event.preventDefault();


// if ($(this).text().includes('read less')) {
    
//     $(this).prev($('.story-body')).html(`${contentText.match(thirdPeriod)}...`);
//     $('.read-more').html('read more &darr;');
    
// } else if ($(this).text().includes('read more')) {
//     content.empty();
//     $(this).prev($('.story-body')).text(contentText);
//     $('.read-more').html('read less &uarr;');
// }