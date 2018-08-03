'use strict';

var app = app || {};

(function(module){

    let productionApiUrl = 'https://my-dog-spot.herokuapp.com';
    let developmentApiUrl = 'http://localhost:3000';

    module.isProduction= /^(?!localhost|127)/.test(window.location.hostname);

    module.ENVIRONMENT = {
        apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
    };

    // Initiate nav functionality
    $('#menu').on('click', () => {
        const navElement = $('nav');
        if (navElement.hasClass('flexed')) {
            navElement.removeClass('flexed');
        } else {
            navElement.addClass('flexed');
        }
    });

    //  Display functions
    module.showOnly = (selector) => {
        $('.js-container').hide();
        $(selector).show();
    };

    module.render = (templateId, data) => {
        module.template = Handlebars.compile($(`#${templateId}`).text());
        return module.template(data);
    };

})(app);
