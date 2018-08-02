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
            };

            module.ShelterPuppy.find(puppy.location, puppyView.initSearchResultsPage);

            event.target.zipcode.value = '';
        });
    };

    puppyView.initSearchResultsPage = () => {
        $('#search-list').empty();
        puppyView.setTeasers();
        app.ShelterPuppy.all.forEach(puppy => $('#search-results').append(puppy.toHtml('puppy-list-template')));

    }

    puppyView.setTeasers = () => {
        $('.story-body *:nth-of-type(n+2)').hide();
        $('section').on('click', 'a.read-on', function(e) {
          e.preventDefault();
          if ($(this).text() === 'Read on →') {
            $(this).parent().find('*').fadeIn();
            $(this).html('Show Less &larr;');
          } else {
            $('body').animate({
              scrollTop: ($(this).parent().offset().top)
            },200);
            $(this).html('Read on &rarr;');
            $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
          }
        });
      };

    module.puppyView = puppyView;
})(app);