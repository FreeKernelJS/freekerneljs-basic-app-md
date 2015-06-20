'use strict';

/**
 * @ngdoc object
 * @name fkjs.views.home
 *
 * @requires $scope
 *
 * @description
 * A view for the home page of this application.
 */
angular.module('fkjs.views.home', [])


/**
 * @ngdoc controller
 * @name fkjs.views.home#HomeController
 * @methodOf fkjs.views.home
 *
 * @description
 * Controls this view's logic and behavior.
 */
.controller('HomeController', function($scope){
    // define a message parameter
    $scope.lastVisitDate = (new Date()).toLocaleDateString();
});