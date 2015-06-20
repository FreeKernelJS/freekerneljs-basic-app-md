'use strict';

angular.module('fkjs.widgets.header', [])


/**
 * @ngdoc directive
 * @name fkjs.widgets.header:fkjsHeader
 *
 * @description
 * Displays a header on top of each page.
 * 
 * @usage
 * <fkjs-header></fkjs-header>
 */
.directive('fkjsHeader', function(){
    return {
        restrict: 'E',
        templateUrl: 'src/widgets/header/template.html',
        replace: true,
        
        scope: {
        },
        
        controller: function($scope){
            $scope.$on('navbarStateChange', function(event, stateText){
                $scope.pageTitle = stateText;
            });
        }
    };
});