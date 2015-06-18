'use strict';


angular.module('fkjs.widgets.navbar', [])

/**
 * @ngdoc directive
 * @name fkjs.widgets.fkjsNavbar
 *
 * @description
 * Set a list of pages in a bar, manage click on each of the items in list.
 * 
 * @usage
 * <fkjs-navbar></fkjs-navbar>
 */
.directive('fkjsNavbar', function($state, $rootScope){
    return {
        restrict: 'E',
        templateUrl: 'src/widgets/navbar/template.html',
        replace: true,

        scope: {
        },

        controller: function($scope){
            /*
             * set "active" css on selected menu item,
             * fire event to notify header regarding this change.
             */
            $scope.$on('$stateChangeSuccess', function(event, current){
                var stateName = $state.$current.self.name;
                var items = $scope.navbarItems;
                var i, stateText, len=items.length;
                for(i=0 ; i<len ; i++){
                    if(items[i].pageUrl === stateName){
                        stateText = items[i].text;
                        $scope.navbarItems[i].isActive = true;
                    }
                    else{
                        $scope.navbarItems[i].isActive = false;
                    }
                }

                $rootScope.$broadcast('navbarStateChange', stateText);
            });
        },
        
        link: function(scope){
            scope.navbarItems = [{
                pageUrl: 'home',
                text: 'Home',
                isActive: true
            },{
                pageUrl: 'page2',
                text: 'Page 2'
            }];
        }
    };
});