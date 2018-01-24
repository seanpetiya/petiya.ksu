angular.module('petiya.ksu', ['ngRoute'])
    .config([
        '$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/', {
                    redirectTo: '/home'
                })
                .when('/home', {
                    templateUrl: 'app/pages/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/' });
        }
    ]);