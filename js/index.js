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
 * Note: better, more modern approach for scope, is to use JavaScript Class.
 */

var app = app || {};

(function(module){

    let productionApiUrl = 'https://my-dog-spot.herokuapp.com';
    let developmentApiUrl = 'http://localhost:3000';

    module.isProduction= /^(?!localhost|127)/.test(window.location.hostname);

    module.ENVIRONMENT = {
        apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
    };

    // Initiate nav functionality
    /**
     * This is a JavaScript arrow function that registers an event, click, with the DOM object,
     * having id menu, using JQuery.
     */
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
