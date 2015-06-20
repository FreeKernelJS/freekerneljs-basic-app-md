'use strict';

/**
 * @ngdoc object
 * @name fkjs.views.main
 *
 * @requires $scope
 * @requires $locale
 * @requires $translate
 * @requires $translateProvider
 *
 * @description
 * Refers to the view defined inside index.html, which is usually the main structure of the application.
 */
angular.module('fkjs.views.main', [])


/**
 * @ngdoc controller
 * @name fkjs.views.main#config
 * @methodOf fkjs.views.main
 * 
 * @description 
 * This config initialize the localization object which is being provided by {@link http://angular-translate.github.io/docs/#/api angular-translate package}.  
 * You can also use {@link https://docs.angularjs.org/guide/i18n#messageformat-extensions message format}.
 */
.config(function($translateProvider){
    // Register a loader for the static files
    $translateProvider.useStaticFilesLoader({
        prefix: 'data/locale/',
        suffix: '.json'
    });
    
    //escape html chars inside messages
    $translateProvider.useSanitizeValueStrategy('escaped');
})


/**
 * @ngdoc controller
 * @name fkjs.views.main#MainController
 * @methodOf fkjs.views.main
 *
 * @description
 * Controls this view's logic and behavior.  
 * This controller is responsible for managing global aspects of the application, such as localization.
 */
.controller('MainController', function($scope, $locale, $translate){
    // Tell the module what language to use by default (=file name)
    $translate.preferredLanguage($locale.id);
    $translate.use($locale.id);
});