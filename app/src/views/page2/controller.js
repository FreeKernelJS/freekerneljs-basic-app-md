'use strict';

/**
 * @ngdoc object
 * @name fkjs.views.page2
 * 
 * @requires $scope
 * @requires httpService
 *
 * @description
 * A view for another page in the application.
 */
angular.module('fkjs.views.page2', [])


/**
 * @ngdoc controller
 * @name fkjs.views.page2#Page2Controller
 * @methodOf fkjs.views.page2
 *
 * @description
 * Controls this view's logic and behavior.  
 * This page demonstrates the use of the {@link fkjs.services.http httpService} - to get data using an Ajax request.
 */
.controller('Page2Controller', function($scope, httpService){
    
    //load data with get request
    httpService.get('data/server/getList.php').then(function(data){ 
        $scope.list = data;
    });
});