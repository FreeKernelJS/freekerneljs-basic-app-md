'use strict';

/**
 * @ngdoc object
 * @name fkjs.services.http
 *
 * @description
 * Responsible for client-server communication.  
 * Provides the following services:
 * 
 * # httpService
 * The http service provides communication with the remote HTTP servers 
 * via the browser's XMLHttpRequest object.
 * 
 * @requires $http
 * @requires $rootScope
 * @requires $q
 * @requires $log
 */
angular.module('fkjs.services.http', [])


.service('httpService', function($http, $rootScope, $q, $log){
    
    /**
     * @ngdoc function
     * @name fkjs.services.http#httpService
     * @methodOf fkjs.services.http
     *
     * @description
     * Sends get request to server.  
     * Interceptors can be added by listening to any of the broadcasting events:
     * - beforeAjaxRequest
     * - ajaxRequestSuccess
     * - ajaxRequestError
     * 
     * @param {string} url The URL of the get request.
     * 
     * @example
     * <pre>
     * httpService.get('url.json').then(function(data){ 
     *     console.log(data); 
     * });
     * </pre>
     * 
     * @return {object} Returns the promise which represents the JSON object from the response.
     */
    this.get = function(url){
        $rootScope.$broadcast('beforeAjaxRequest');

        var deferred = $q.defer();
        
        $http.get(url)

        .success(function(res){
            deferred.resolve(res);
            $rootScope.$broadcast('ajaxRequestSuccess');
        })
        
        .error(function(msg, code){
            deferred.reject(msg);
            $log.error(msg, code);
            $rootScope.$broadcast('ajaxRequestError');
        });

        return deferred.promise;
    };
});