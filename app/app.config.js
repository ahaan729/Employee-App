'use strict';

angular.
module('employeeApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/employee', {
            template: '<add-employee></add-employee>'
        }).
        /*when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).*/
        otherwise('/employee');
    }
]);
